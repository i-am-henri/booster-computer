<div align="center">
   <img src="/brand/logo.svg" alt="booster.computer logo" width="50" height="50" align="right"> 
   <h1>Booster.computer</h1>
   <p>The visual boilerplaite generator</p>
</div>
<p align="center"> 
   <a href="/README.md">🏘️ Home</a> 
   • 
   <a href="/docs/features.md">🚀 Features</a> 
   • 
   <a href="/docs/selfhost.md">💻 Selfhost</a>
   • 
   <a href="/docs/contributing.md">🤝 Contributing</a> 
   • 
   <a href="/LICENSE">📄 License</a> 
</p>
<p align="center"> 
   <h2 align="center">Create you own guide for booster.</h2>
</p>

<br />

> [!IMPORTANT]
> This is a guide to create your own guide for booster.computer. You will need a github account to do this.

**1. Fork this repository.**

You can do this by clicking on the top right button and selecting "Fork". This will copy the repository to your own account. You can then edit the files and make a pull request to merge your changes back into the main repository. But we will cover this feature later in this guide.

![Image of the fork button](./assets/{E418DD5C-16CB-40FA-847B-107138220032}.png)

**2. Clone your forked repository.**

> [!NOTE]
> This step is only required if you want to make changes to this guide on your local machine, not on the github editor.

First, you need to install [git](https://git-scm.com/downloads) on your computer. Then, open the command menu on the wished folder and type the following command:

```bash
git clone https://github.com/i-am-henri/booster-computer.git
```

This will create a folder called `booster-computer` in your current directory. You will see all of the files from the original repository in this folder. 

**3. Create a new branch.**

In order to make changes to the guide, you need to create a new branch. This will allow you to make changes without affecting the main repository. You can do this by typing the following command in the command menu:

```bash
git checkout -b <branch-name>
```

Replace `<branch-name>` with the name of the branch you want to create. For example, if you want to create a new branch called `my-guide`, you would type:

```bash
git checkout -b my-guide
```

This will create a new branch called `my-guide` and switch to it. You can now make changes to the guide and commit them to this branch.

**4. Make changes to the guide.**

Now that you have a branch, you can make changes to the guide. If you want to create a new guide, you have to create a new markdown file (.md extension) in the `docs/guides` folder. You can copy the content below and paste it into your new file. This will create a new heading with the title of your guide.

```markdown
<div align="center">
   <img src="/path/to/your/logo.png" alt="Your Logo" width="80" height="80" align="right"> 
   <h1>Booster.computer</h1>
   <p>The visual boilerplaite generator</p>
</div>
<p align="center"> 
   <a href="#key-features">🚀 Features</a> 
   • 
   <a href="#installation">💻 Installation</a> 
   •
   <a href="#usage">🔧 Usage</a> 
   • 
   <a href="#contributing">🤝 Contributing</a> 
   • 
   <a href="#license">📄 License</a> 
</p>
<p align="center"> 
   <h2 align="center">Create you own guide for booster.</h2> <!-- Please rename -->
</p>

<br />
```

Please rename the marked heading to the title of your guide. After the `<br />` tag, you can add your guide content. You can use the markdown syntax to format your text. For example, you can make a heading by using `#` followed by the heading text.

**5. Commit your changes.**

Once you have made your changes, you need to commit them to your branch. You can do this by typing the following command in the command menu:

```bash
git add .
git commit -m "Your commit message"
```

Replace `Your commit message` with a short description of your changes. This will commit your changes to your branch and create a new commit.

**6. Push your changes.**

Now that you have committed your changes, you need to push them to your forked repository. You can do this by typing the following command in the command menu:

```bash
git push origin <branch-name>
```

Replace `<branch-name>` with the name of the branch you created earlier. For example, if you created a branch called `my-guide`, you would type:

```bash
git push origin my-guide
```

This will push your changes to your forked repository.

**7. Create a pull request.**

Once you have pushed your changes, you need to create a pull request to merge your changes back into the main repository. You can do this by going to your forked repository on github and clicking on the "Pull requests" tab. Then, click on the "New pull request" button.

![The pull request tab](./assets/{42E9DF68-1839-4D69-9001-03274803030C}.png)
![The button to create a new pull request](./assets/{D75C0A48-F2A9-4806-A17E-424064807B58}.png)

This will open a new page where you can create a pull request.

**You now have to wait for a reviewer to review your pull request. After the reviewer approves your pull request, you can merge your changes into the main repository. This means, your guide will be available to everyone on this github repository. 🥳**