import {danger, message, fail} from "danger"

const pr = danger.github.pr;
const modifiedMD = danger.git.modified_files.join("- ")
message("Change Files in this PR: \n - " + modifiedMD)
if (pr.assignee === null) {
  fail("Please assign someone to merge this PR")
}