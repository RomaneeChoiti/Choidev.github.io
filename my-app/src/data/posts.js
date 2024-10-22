// src/data/posts.js
const gitblog = [
  {
    id: "post1",
    title: "Understanding Git Basics",
    date: "2024/03/03",
    link: "/gitblog/post1",
    content: `
        Git is a distributed version control system (DVCS) that allows you to track changes in your codebase and collaborate with others efficiently. In this post, we will cover:
        - What is Git and why it’s useful.
        - Installing Git and basic configuration.
        - Creating your first commit and viewing the commit history.
      `,
  },
  {
    id: "post2",
    title: "How to Use GitHub for Collaboration",
    date: "2024/03/03",
    link: "/gitblog/post2",
    content: `
        GitHub is a platform that uses Git for version control and offers collaboration features. In this post, we will explore:
        - Creating a repository on GitHub.
        - Working with branches and pull requests.
        - Using GitHub Issues and Project boards to manage your projects.
      `,
  },
  {
    id: "post3",
    title: "Advanced Git Commands",
    date: "2024/03/03",
    link: "/gitblog/post3",
    content: `
        Once you have mastered the basics of Git, you can use advanced commands to manage your codebase more efficiently. This post covers:
        - Rebasing vs. Merging branches.
        - Interactive rebase for cleaning up commit history.
        - Git stash and how to manage temporary changes.
      `,
  },
];

export default gitblog;
