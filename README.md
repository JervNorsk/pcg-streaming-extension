## Pokémon Community Game (Streaming Extension)

![GitHub package.json version](https://img.shields.io/github/package-json/v/jervnorsk/pcg-streaming-extension?filename=services%2Fapp%2Fmodules%2Fcore%2Fpackage.json&link=https%3A%2F%2Fgithub.com%2FJervNorsk%2Fpcg-streaming-extension%2Ftags)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/jervnorsk/pcg-streaming-extension/service-app-production-publishing.yaml?link=https%3A%2F%2Fgithub.com%2FJervNorsk%2Fpcg-streaming-extension%2Factions%2Fworkflows%2Fservice-app-production-publishing.yaml)

This project have the purpose of extends the functionalities of Pokémon Community Game for Twitch.

Inspired by [Shields.io](https://shields.io/) we want to make the streamer's lives more easy and provide services by URL
to integrate in their
streaming tools.


### Quickstart

1. Open your OBS / Streaming Tool.
2. Add a **Browse** source in the scene.
3. Use one of the following links:

   | Feature                  | Link                                                                                    |
   |--------------------------|-----------------------------------------------------------------------------------------|
   | Show the current Pokemon | https://jervnorsk.github.io/integrations/pcg/streaming/info/events/show_current_pokemon |
   | Show the spawn cooldown  | https://jervnorsk.github.io/integrations/pcg/streaming/info/events/spawn_cooldown       |
   | Enable the spawn alert   | https://jervnorsk.github.io/integrations/pcg/streaming/info/events/spawn_alert          |

4. Set the size of the source to 800 x 600.

##### Only for Spawn Alert
1. Enable the Control audio option.
2. Go in Advanced Audio Settings and enable the Monitor and Output on the Browse source.

### Contacts

- [PCG Official Documentation](https://bit.ly/3hyZXaF)
  <p style="color: gray">
  If you search a quick overview how the twitch extension bot works.
  </p>


- [PCG Official Discord](https://discord.gg/cT3ThCj)
  <p style="color: gray">
  If you have any problems with the twitch extension bot or want to contact them.
  </p>


- [PCG Official Twitch About](https://www.twitch.tv/pokemoncommunitygame/about)
  <p style="color: gray">
  If the links above not works or just for a follow. <3
  </p>


- [PCG Official Twitch Category](https://www.twitch.tv/directory/game/Pok%C3%A9mon%20Community%20Game)
  <p style="color: gray">
  If you want to discover / play with the twitch extension bot.
  </p>

### Contributing

Are you a developer? We invite your participation through pull requests!

- [GitHub Issues](https://github.com/JervNorsk/pcg-streaming-extension/issues)
  <p style="color: gray">
  If you detect a bug, please report it. Help us to be a better version of ourselves.
  </p>


- [GitHub Discussions](https://github.com/JervNorsk/pcg-streaming-extension/discussions)
  <p style="color: gray">
  If you have any suggestion, critique or want to discuss of a specific feature: welcome!
  </p>

### API

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
| delay       | milliseconds | false    | 3000                          | Set the start delay of a song during the alert      |

### Development

#### Dependencies

![GitHub package.json dependency @angular/core version](https://img.shields.io/github/package-json/dependency-version/jervnorsk/pcg-streaming-extension/%40angular%2Fcore?filename=services%2Fapp%2Fpackage.json&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40angular%2Fcore%2Fv%2F16.1.0)

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
