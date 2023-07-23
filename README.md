## Pokémon Community Game (Streaming Extension)

![GitHub package.json version](https://img.shields.io/github/package-json/v/jervnorsk/pcg-streaming-extension?filename=services%2Fapp%2Fpackage.json)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/jervnorsk/pcg-streaming-extension/service-app-on-tag.yaml)

This project have the purpose of extends the functionalities of Pokémon Community Game for Twitch.

Inspired by [Shields.io](https://shields.io/) we want to make the streamer's lives more easy and provide services by URL
to integrate in their
streaming tools.

### Contacts

- ![Document Icon](https://icons-for-free.com/download-icon-docs+document+file+google+suits+icon-1320183406448604527_16.png)
  [PCG Official Documentation](https://bit.ly/3hyZXaF)
  <p style="color: gray">
  If you search a quick overview how the twitch extension bot works.
  </p>


- ![Discord Icon](https://icons-for-free.com/download-icon-discord+circle-1330289835373740312_16.png)
  [PCG Official Discord](https://discord.gg/cT3ThCj)
  <p style="color: gray">
  If you have any problems with the twitch extension bot or want to contact them.
  </p>


- ![Twitch Icon](https://icons-for-free.com/download-icon-twitch-1320194802070375032_16.png)
  [PCG Official Twitch About](https://www.twitch.tv/pokemoncommunitygame/about)
  <p style="color: gray">
  If the links above not works or just for a follow. <3
  </p>


- ![Twitch Icon](https://icons-for-free.com/download-icon-twitch-1320194802070375032_16.png)
  [PCG Official Twitch Category](https://www.twitch.tv/directory/game/Pok%C3%A9mon%20Community%20Game)
  <p style="color: gray">
  If you want to discover / play with the twitch extension bot.
  </p>

### Contributing

Are you a developer? We invite your participation through pull requests!

- ![GitHub Icon](https://icons-for-free.com/download-icon-github+hub+icon+icon-1320194800839659861_16.png)
  [GitHub Issues](https://github.com/JervNorsk/pcg-streaming-extension/issues)
  <p style="color: gray">
  If you detect a bug, please report it. Help us to be a better version of ourselves.
  </p>


- ![GitHub Icon](https://icons-for-free.com/download-icon-github+hub+icon+icon-1320194800839659861_16.png)
  [GitHub Discussions](https://github.com/JervNorsk/pcg-streaming-extension/discussions)
  <p style="color: gray">
  If you have any suggestion, critique or want to discuss of a specific feature: welcome!
  </p>

### Features

- Get the current Pokémon.
  <p style="color: gray">
  URL: <code>/info/events/show_current_pokemon</code>
  </p>
  <p style="color: orangered">
  Use the original API exposed by PCG.
  </p>

| Query Param   | Type    | Required | Default | Description                                              |
|---------------|---------|----------|---------|----------------------------------------------------------|
| gif           | boolean | false    | true    | Enable the animation of the Pokémon when spawned         |
| question_mark | boolean | false    | true    | Enable the question mark when the Pokémon is not spawned |

- Get the spawn timer.
  <p style="color: gray">
  URL: <code>/info/events/spawn_cooldown</code>
  </p>
  <p style="color: orangered">
  Use the original API exposed by PCG.
  </p>


- Get the sound alert when a Pokémon spawn.
  <p style="color: gray">
  URL: <code>/info/events/spawn_alert</code>
  </p>

| Query Param | Type         | Required | Default                       | Description                                         |
|-------------|--------------|----------|-------------------------------|-----------------------------------------------------|
| gen         | I, IV, V, IX | false    | I                             | Set the sound alert song from a specific generation |
| type        | wild_battle  | false    | wild_battle                   | Set the sound alert song type                       |
| duration    | milliseconds | false    | based on sound alert selected | Set the duration of a song during the alert         |

### Development

#### Dependencies

![GitHub package.json dependency @angular/core version](https://img.shields.io/github/package-json/dependency-version/jervnorsk/pcg-streaming-extension/%40angular%2Fcore?filename=services%2Fapp%2Fpackage.json)

#### Quickstart

1. Install Node 18 or later. You can use the [package manager](https://nodejs.org/en/download/package-manager/) of you
   choice.
   <p style="color: gray">
   In this example we suppose to use <code>npm</code>.
   </p>

2. Clone this repository and move in the folder `services/app`.
3. Run `npm ci`.
4. Run `npm start`.
5. Open `http://localhost:4200/` in the browser to view the service.

#### Structure

I am currently evolving the project structure to adapt it to the technologies I am studying.

In the [TODO](./TODO.md) file I have inserted the directives to update this structure in the next step.

The `services` folder represents all the services created in function of this project.

At the moment the `app` service represents the package released but in the future will be an integrated in a
package.json that will contain each service of this project.

The `.github/workflows` folder configures the GitHub Actions pipelines, important for a correct management of other
projects related.

### License

All assets and code related to this project are under the [MIT LICENSE](./LICENSE) and in the public domain unless
specified otherwise.

The assets related to the original API exposed by PCG and the sound alert's songs provided from SoundCloud are
trademarks of their respective companies and are under their terms and license.
