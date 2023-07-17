import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {zip} from "rxjs";

declare namespace SC {
    class Widget {
        constructor(iFrame: HTMLIFrameElement)

        load(url: string, options?: any): void;

        play(): void;

        pause(): void;

        toggle(): void;

        seekTo(millisecond: number): void;
    }
}

export enum PcgSeSoundAlertGeneration {
    I = 1,
    II = 2,
    III = 3,
    IV = 4,
    V = 5,
    VI = 6,
    VII = 7,
    VIII = 8,
    IX = 9
}

export enum PcgSeSoundAlertType {
    BattleWild = "wild_battle"
}

export class PcgSeSoundAlert {

    constructor(
        public generation: PcgSeSoundAlertGeneration,
        public type: PcgSeSoundAlertType,
        public trackId: string,
        public trackDuration: number
    ) {
    }
}

@Component({
    templateUrl: './pce-se-sound-alert.component.html'
})
export class PcgSeSoundAlertComponent implements OnInit, AfterContentInit {

    public debug: boolean = false;

    private soundAlert?: PcgSeSoundAlert;

    private pcgBaseUrl = "https://poketwitch.bframework.de";
    private soundCloudPlayerBaseUrl: string = "https://w.soundcloud.com/player";
    private soundCloudApiBaseUrl: string = "https://api.soundcloud.com"

    private get soundCloudPlayerIFrame(): HTMLIFrameElement | null {
        return document.querySelector("iframe");
    }

    private soundCloudPlayerWidget?: SC.Widget;

    private get soundCloudPlayer(): SC.Widget {
        if (!this.soundCloudPlayerWidget) {
            this.soundCloudPlayerWidget = (<any>window).SC.Widget(this.soundCloudPlayerIFrame);
        }
        return this.soundCloudPlayerWidget!;
    }

    constructor(
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.loadSoundCloudPlayer();
    }

    private getEnumByValue<T extends Record<string, number>>(enumObj: T, value: any): T[keyof T] | undefined {
        return (Object.keys(enumObj) as Array<keyof T>)
            .filter(key => typeof enumObj[key] === 'number' && enumObj[key] === value)
            .map(key => enumObj[key])[0];
    }

    ngAfterContentInit() {
        zip([
            this.route.data,
            this.route.queryParams
        ]).subscribe(([data, queryParams]) => {
            const params = {...data, ...queryParams};

            this.debug = params["debug"] === "true";

            if (this.debug) {
                console.log(params);
            }

            if (params["player"] !== "true") {
                this.soundCloudPlayerIFrame!.style.display = "none";
            }

            this.soundAlert = this.getSoundAlert(
                this.getSoundAlertGeneration(params["gen"]),
                this.getSoundAlertType(params["type"]),
                params["duration"]
            )
            if (this.debug) {
                console.log(this.soundAlert);
            }

            setTimeout(
                () => {
                    this.soundCloudPlayer.load(
                        this.getSoundCloudPlayerTrackUrl(this.soundAlert!.trackId)
                    );

                    this.simulateTimerMainLoop();
                },
                1000
            )
        });
    }

    getSoundAlert(generation: PcgSeSoundAlertGeneration, type: PcgSeSoundAlertType, duration?: number): PcgSeSoundAlert {
        const soundAlertTrack = this.getSoundCloudPlayerTrack(
            generation,
            type,
            duration
        );
        return new PcgSeSoundAlert(
            generation,
            type,
            soundAlertTrack.id,
            soundAlertTrack.duration
        )
    }

    getSoundAlertGeneration(generation: string) {
        switch (generation.toLowerCase()) {
            default:
            case "i":
                return PcgSeSoundAlertGeneration.I;
            case "ii":
                return PcgSeSoundAlertGeneration.II;
            case "iii":
                return PcgSeSoundAlertGeneration.III;
            case "iv":
                return PcgSeSoundAlertGeneration.IV;
            case "v":
                return PcgSeSoundAlertGeneration.V;
            case "Vi":
                return PcgSeSoundAlertGeneration.VI;
            case "vii":
                return PcgSeSoundAlertGeneration.VII;
            case "viii":
                return PcgSeSoundAlertGeneration.VIII;
            case "ix":
                return PcgSeSoundAlertGeneration.IX;
        }
    }

    getSoundAlertType(type: string) {
        switch (type.toLowerCase()) {
            default:
            case "wild_battle":
                return PcgSeSoundAlertType.BattleWild;
        }
    }

    private getSoundCloudPlayerTrack(
        generation: PcgSeSoundAlertGeneration,
        type: PcgSeSoundAlertType,
        duration?: number
    ): { id: string, duration: number } {
        if (generation === PcgSeSoundAlertGeneration.I) {
            if (type === PcgSeSoundAlertType.BattleWild) {
                // TODO: verify the license
                // VGM Planet | 24 Battle (VS Wild Pokemon)
                // https://soundcloud.com/vgmplanet/24-battle-vs-wild-pokemon?in=user-278345307/sets/all-pokemon-battle-themes-the&si=1a1ba93008134c1d8c19da3b33cf1e59&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing
                return {
                    id: "1235778460",
                    duration: duration || 4400
                };
            }
        } else if (generation === PcgSeSoundAlertGeneration.IV) {
            if (type === PcgSeSoundAlertType.BattleWild) {
                // TODO: verify the license
                // HEIVEN | Battle! Wild Pokémon
                // https://soundcloud.com/user-829882792/battle-wild-pokemon?in=heiven-881702260/sets/pokemon-battle-themes-ost-2006&si=f0388a124e994b1c819aaab4c53b2318&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing
                return {
                    id: "631141938",
                    duration: duration || 4800
                };
            }
        } else if (generation === PcgSeSoundAlertGeneration.V) {
            if (type === PcgSeSoundAlertType.BattleWild) {
                // TODO: verify the license
                // VGM Planet | Battle! Wild Pokémon
                // https://soundcloud.com/vgmplanet/battle-wild-pokemon-1?in=user-278345307/sets/all-pokemon-battle-themes-the&si=d6ec9d58a51743949bfe08d38ab2158f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing
                return {
                    id: "1235709346",
                    duration: duration || 5100
                };
            }
        } else if (generation === PcgSeSoundAlertGeneration.IX) {
            if (type === PcgSeSoundAlertType.BattleWild) {
                // TODO: verify the license
                // InfiniteShadow | Pokémon Scarlet And Violet OST - Wild Pokémon Battle Theme 2
                // https://soundcloud.com/user-675036643/pokemon-scarlet-and-violet-ost-wild-pokemon-battle-theme-2?in=user-675036643/sets/pokemon-scarlet-and-violet&si=46075f6eff5c469f9e93e281d1b28f8a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing
                return {
                    id: "1380417496",
                    duration: duration || 3500
                };
            }
        }

        // TODO: Redirect to documentation.

        // By default return [Gen I | Battle Wild].
        return {
            id: "1235778460",
            duration: duration || 4400
        };
    }

    private getSoundCloudPlayerTrackUrl(trackId: string): string {
        return `${this.soundCloudApiBaseUrl}/tracks/${this.soundAlert!.trackId}`;
    }


    private loadSoundCloudPlayer() {
        const scriptElement = document.createElement("script");
        scriptElement.src = `${this.soundCloudPlayerBaseUrl}/api.js`;
        document.body.appendChild(scriptElement);
    }

    public simulateTimerSoundAlert() {
        if (this.debug) {
            console.log("play");
        }

        setTimeout(
            () => {
                this.soundCloudPlayer.pause();
            },
            this.soundAlert!.trackDuration
        )

        this.soundCloudPlayer.seekTo(0);
        this.soundCloudPlayer.play();
    }

    public simulateTimerMainLoop() {
        if (this.debug) {
            this.simulateTimerCooldownWait(10);
        } else {
            fetch(`${this.pcgBaseUrl}/info/events/last_spawn/`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.simulateTimerCooldownWait(data.next_spawn);
                });
        }
    }

    private simulateTimerCooldownWait(nextSpawn: number) {
        nextSpawn -= 1;

        if (this.debug) {
            console.log("[simulateTimer]", nextSpawn);
        }

        if (nextSpawn.toString() == "0") {
            this.simulateTimerSoundAlert();
        }

        if (nextSpawn > 0) {
            setTimeout(
                () => {
                    this.simulateTimerCooldownWait(nextSpawn);
                },
                1000
            );
        } else {
            setTimeout(
                () => {
                    this.simulateTimerMainLoop();
                },
                2000
            );
        }
    }
}
