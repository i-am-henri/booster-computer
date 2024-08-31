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
    <h2 align="center">Guides for booster.</h2>
</p>

<br />

**💻 Selfhosting booster:**

At the time, we are not offering a docker image to selhost booster. Please clone this repository:

```bash
git clone https://github.com/i-am-henri/booster-computer.git
```

And run the following command to start the server:

> [!IMPORTANT]
> Please not use `npm run dev` to start the server because this will crash the server on every errror.

```bash
npm run start
```

This will start the server on port 3000. You can also specify another port by using the `--port` flag in the package.json file, next to the `start` script. This will look like this:

```json
"start": "next start --port 5000"
```

With a service like caddy, you can then forward this port to your domain.

<sub>
In the future, we are planning to offer a docker image to selfhost booster and an official coolify integration.
</sub>