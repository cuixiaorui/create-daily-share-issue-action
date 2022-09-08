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
    repo: "daily-share",
    title: getTitle(),
    body: getBody(),
  });
}

function getBody() {
  return `可以从 what 和 why 的角度来描述要分享的内容
  - what 是指要分享的是什么
  - why 是指为什么分享
 
比如：
    推荐一篇讲解 vue3  diff 算法的文章（what）
    文章里面通过大量的图片和可运行的demo来讲解 vue3 的 diff 算法  看完秒懂（why）`;
}

function getTitle() {
  return "【每日分享】" + getDate();
}

function getDate() {
  // 运行环境是 UTC 时区
  // 需要转换成 中国时区
  // 中国时区 = UTC时区 + 8小时
  return dayjs().add("8", "hour").format("YYYY-MM-DD");
}
