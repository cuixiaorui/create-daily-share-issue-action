const core = require("@actions/core");
const github = require("@actions/github");

(function main() {
  const token = core.getInput("token");
  const octokit = github.getOctokit(token);

  createIssue(octokit);
})();

function createIssue(octokit) {
  octokit.rest.issues.create({
    owner: "cuixiaorui",
    repo: "study-every-day",
    title: getTitle(),
    body: getBody(),
  });
}

function getBody() {
  return "[如何写每日任务](https://github.com/cuixiaorui/study-every-day/blob/main/sed/daily-task.md)";
}

function getTitle() {
  return `【学习日报】 ${getDate()}`;
}

function getDate() {
  const date = new Date();
  const year = date.getFullYear();

  const month = normalizeDate(date.getMonth() + 1);
  const day = normalizeDate(date.getDate());

  return `${year}-${month}-${day}`;
}

function normalizeDate(n) {
  return n < 10 ? `0${n}` : n;
}
