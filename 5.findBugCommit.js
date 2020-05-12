// Q5. 
// You are working on a large codebase, when you discover a bug. 
// The current commit has the bug, but a commit from several months ago does not.
// Given a sorted list of 100 commits, write a function that returns an object 
// containing the commit and index.  Your solution must run in log(n) time.

// example input
// let commits = [
//   ... 
//   { timestamp: "2020-02-13T14:22:20.841Z", status: "good" },
//   { timestamp: "2020-02-13T14:20:40.842Z", status: "good" },
//   { timestamp: "2020-02-13T14:19:00.843Z", status: "good" },
//   { timestamp: "2020-02-13T14:17:20.844Z", status: "bad" },
//   { timestamp: "2020-02-13T14:14:00.846Z", status: "bad" },
//   ...
// ]

// identifyFirstBadCommit(commits)

// should return:
//  {
//    commit: { timestamp: '2020-02-13T14:17:20.844Z', status: 'bad' },
//    index: 78
//  }  

const identifyFirstBadCommit = (commits) => {
  let frontPointer = 0;
  let backPointer = commits.length - 1;
  let currentPointer = Math.round((frontPointer + backPointer) / 2);

  while (frontPointer < backPointer) {
    if (
      commits[currentPointer].status === "bad" &&
      commits[currentPointer - 1].status === "good"
    ) {
      return { commit: commits[currentPointer], index: currentPointer };
    }

    currentPointer = Math.round((frontPointer + backPointer) / 2);
    let midCommit = commits[currentPointer];

    if (midCommit.status === "bad") {
      backPointer = currentPointer;
    } else if (midCommit.status === "good") {
      frontPointer = currentPointer;
    }
  }

  return null;
}


module.exports = identifyFirstBadCommit
