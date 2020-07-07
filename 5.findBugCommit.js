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

// sorted = binary 
// find mid idx = split in half --> think phonebook 
// should have left side and right side 
// left should start 0
// right is end so arr.len -1 
// if target === midIdx then return that 
// if midIdx is less then 
// [1, 2, 3, 4, 5]
// mid is 3, lets say we're looking for 5 so if mid if less than 5
// we know we need to go to the right 
// if mid is greater, we go to the left (might be confusing left and right?)


const identifyFirstBadCommit = (commits) => {
    let left = 0;
    let right = commits.length - 1
    //checking if one side is less than other // no equiv check
    while(left < right) {
        // grabbing mid of arr
        let middleIdx  = Math.floor((left + right) / 2);
        // bad commit then run this
        if (commits[middleIdx].status === "bad") {
            // we want to go thru the right side and set it
        right = middleIdx
        } else {
            // set left 
            left = middleIdx + 1
        }
    }
    return {commit: commits[right], index: right};
}


module.exports = identifyFirstBadCommit;
