import * as core from '@actions/core';
import * as github from '@actions/github';

async function run() {
  try {
    const
      context = github.context,
      titleToMatch = "Pull Request Title",
      title = context!.payload!.pull_request!.title;

    core.info(`Checking "${title}" against "${titleToMatch}".`);
    if (title.match(new RegExp(titleRegex, 'g'))) {
      core.info(`Match found for PR title "${title}" using regex "${titleRegex}".`);
    } else {
      core.setFailed(failureMessage);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
