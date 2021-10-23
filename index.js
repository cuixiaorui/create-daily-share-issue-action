const core = require("@actions/core");
const github = require("@actions/github");
const dayjs = require("dayjs");

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
  return `【每日计划】 ${getDate()}`;
}

function getDate() {
  // 运行环境是 UTC 时区
  // 需要转换成 中国时区
  // 中国时区 = UTC时区 + 8小时
  return dayjs().add("8", "hour").format("YYYY-MM-DD");
}
