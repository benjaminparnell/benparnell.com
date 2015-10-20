title: Git
author:
  name: Benjamin Parnell
  twitter: benjaminparnell
  url: http://benparnell.com
output: ../public/presentations/git.html

--

# Git
## By Benjamin Parnell

--

# Git is version control

--

## Common misconceptions:

* "Git always loses my data"
* "I always get conflicts doing anything in teams"
* "What is the point of branches? They only cause problems."
* "I don't like the command line."

I am going to try and show you why these aren't problems.

--

# Git 101 (demo)

```bash
mkdir myproject && cd myproject
git init
touch README.md
echo "Hello World!" > README.md
git add .
git commit -m "Initial commit"
```

--

# git log

```bash
git log
git log --stat # shows the +/- for each file in each commit
git log mybranch # shows the log for that branch
git log --pretty # the list goes on...
```

--

# git branch

```bash
git checkout -b feature-name
echo "A change" > README.md
git add .
git commit -m "Add a change"
git checkout master
git merge feature-name
```

--

# That's pretty much the basic stuff

--

# Remotes and GitHub

```bash
git remote add origin https://github.com/username/reponame.git
git push origin master    # this will not track
git push -u origin master # this will track
```

--

```bash
# say you have master checked out, and you want to merge in origin/master

# if tracking is setup and you have master checked out
git pull

# Otherwise:
git fetch origin
git merge origin master

# merging in another branch from origin is similar
git fetch origin
git merge origin otherbranch

# checking out another branch on your machine (and automatically track)
git fetch origin
git checkout otherbranch
```
--

# Merge conflicts and how to resolve them

--

"I don't like the command line"

There are [these great GUI clients
available](https://git-scm.com/download/gui/win) and many more out there.

--

## Resources

* [https://git-scm.com/](https://git-scm.com/) - Git website and docs
* [https://try.github.io/](https://try.github.io/) - Interactive tutorial
* [https://github.com](https://github.com) - for Git repo hosting.
* [https://bitbucket.org/](https://bitbucket.org/) - Like GitHub, but offers free private repos - perfect for uni projects/non public work.
