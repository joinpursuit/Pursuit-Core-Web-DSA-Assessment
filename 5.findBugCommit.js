// Q5. 
// You are working on a large codebase, when you discover a bug. 
// The current commit has the bug, but a commit from several months ago does not.
// Given a sorted list of 100 commits, write a function that returns an object 
// containing the commit and index.  Your solution MUST run in log(n) time.

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
    if(!commits.length) return null;
    let currentIdx = commits.length - 1; 
    let currentCommit = commits[currentIdx];

    while(currentCommit) {
        if(currentCommit.status === "bad") {
            currentIdx -= 1;
            currentCommit = commits[currentIdx];
        } else {
            currentIdx += 1;
            currentCommit = commits[currentIdx];
            break;
        }

    }

    return {
        commit: currentCommit,
        index: currentIdx
    }
}


module.exports = identifyFirstBadCommit
