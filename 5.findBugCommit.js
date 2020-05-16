// Q5.
// You are working on a large codebase, when you discover a bug.
// The current commit has the bug, but a commit from several months ago does not.
// Given a sorted list of 100 commits, write a function that returns an object
// containing the commit and index.  Your solution MUST run in log(n) time.

// example input
let commits = [
  { timestamp: "2020-02-13T14:22:20.841Z", status: "good" },
  { timestamp: "2020-02-13T14:20:40.842Z", status: "good" },
  { timestamp: "2020-02-13T14:19:00.843Z", status: "good" },
  { timestamp: "2020-02-13T14:17:20.844Z", status: "bad" },
  { timestamp: "2020-02-13T14:14:00.846Z", status: "bad" },
];

// should return:
//  {
//    commit: { timestamp: '2020-02-13T14:17:20.844Z', status: 'bad' },
//    index: 78
//  }

const identifyFirstBadCommit = (commits) => {
  let left = 0;
  let right = commits.length - 1;
  while (left < right) {
    let midIdx = Math.floor((left + right) / 2);
    if (commits[midIdx].status === "bad") {
      right = midIdx;
    } else {
      left = midIdx + 1;
    }
  }
  return {
    commit: commits[right],
    index: right,
  };
};
console.log(identifyFirstBadCommit(commits));

module.exports = identifyFirstBadCommit;
