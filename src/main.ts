import * as core from '@actions/core';
import * as github from '@actions/github';

async function run() {
  try {
    const
      context = github.context,
      titleToMatch = "Pull Request Title",
      title = context!.payload!.pull_request!.title;

    core.info(`Checking "${title}" against "${titleToMatch}".`);
    if (title === titleToMatch) {
      core.info(`Match found for PR title "${title}" when comparing "${titleToMatch}".`);
    } else {
      core.setFailed(`Title ${title} does not match ${titleToMatch}`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
