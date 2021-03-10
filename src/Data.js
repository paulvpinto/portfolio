import InnerTuneImage1 from "./Images/InnerTune/InnerTune1.png"
import InnerTuneImage2 from "./Images/InnerTune/InnerTune2.png"
import InnerTuneImage3 from "./Images/InnerTune/InnerTune3.png"
import InnerTuneImage4 from "./Images/InnerTune/InnerTune4.png"
import InnerTuneImage5 from "./Images/InnerTune/InnerTune5.png"
import InnerTuneImage6 from "./Images/InnerTune/InnerTune6.png"
import InnerTuneImage7 from "./Images/InnerTune/InnerTune7.png"

import LumeraImage1 from "./Images/Lumera/Lumera1.png"
import LumeraImage2 from "./Images/Lumera/Lumera2.png"
import LumeraImage3 from "./Images/Lumera/Lumera3.png"
import LumeraImage4 from "./Images/Lumera/Lumera4.png"
import LumeraImage5 from "./Images/Lumera/Lumera5.png"
import LumeraImage6 from "./Images/Lumera/Lumera6.png"
import LumeraImage7 from "./Images/Lumera/Lumera7.png"

import GuidingSoulsImage1 from "./Images/GuidingSouls/GuidingSouls1.png"
import GuidingSoulsImage2 from "./Images/GuidingSouls/GuidingSouls2.png"
import GuidingSoulsImage3 from "./Images/GuidingSouls/GuidingSouls3.png"
import GuidingSoulsImage4 from "./Images/GuidingSouls/GuidingSouls4.png"
import GuidingSoulsImage5 from "./Images/GuidingSouls/GuidingSouls5.png"
import GuidingSoulsImage6 from "./Images/GuidingSouls/GuidingSouls6.png"
import GuidingSoulsImage7 from "./Images/GuidingSouls/GuidingSouls7.png"
import GuidingSoulsImage8 from "./Images/GuidingSouls/GuidingSouls8.png"

export default [
    {
        sys: {
            id: "1"
        },
        fields: {
            name: "Inner Tune",
            slug: "inner_tune",
            type: "Video Game",
            featured: true,
            preview: InnerTuneImage1,
            content: [
                {
                    fields: {
                        id: "1",
                        title: "Game Details",
                        paragraph: "August 2020 \n \n Inner Tune is a 3D Rhythm Action Game Project where the protagonist must face emotion boss versions of themself in various dreamscape worlds. They must utilize the power to perform enhanced actions according to their own beat while dodging the attacks of the bosses that match with their song. \n \n Role: Solo Developer \n \n I developed the game using blueprints in Unreal Engine 4, the music and sounds in Reaper, the character model in VRoid Studio, the environment and other assets in Blender, and used animations and objects from Mixamo and Epic Games' Paragon assets.",
                        media:
                            {
                                type: "video",
                                url: "https://youtu.be/ie1hIGDGSec"
                            }
                    }
                },
                {
                    fields: {
                        id: "2",
                        title: "Process",
                        paragraph: "One of the main challenges of creating this first demo was incorporating the rhythm mechanic into the combat without over complicating the core gameloop. The way I tackled this was designing the boss attack patterns to match the song and creating a enhanced action system that follows a seperate rhytmic pattern. This allowed the player to have cues for each system and not be as overwhemled during combat. \n \n The way the enhanced action system works is that there is a constant drum beat that plays alongside the levels BGM, the player may perform an action such as jumping, dashing, and attacking at the same time as the beat to trigger an enhanced version of the performed action which uses no energy and has increased effects.",
                        media:
                            {
                                type: "image",
                                url: InnerTuneImage2
                            }
                    }
                },
                {
                    fields: {
                        id: "3",
                        title: "Reflection",
                        paragraph: "This first iteration was a great experience as I was able to learn a lot about the different roles of game developement and how each aspect of creating the game work together. After doing some internal balance testing and having friends try out the game, there is a lot of improve and further develop. \n \n In the future, I plan to create several bosses and levels that encompass a different emotion, creating music and designing the world and level to match each motif. The story follows the protagonist overcoming his overflowing emotions with the help of music. Some examples of upcoming bosses would be a red, angry boss which uses metal, rock, or rap, another one would be a yellow, happy boss which uses pop, or funk.",
                        media: 
                            {
                                type: "gallery",
                                gallery: 
                                [
                                   InnerTuneImage3,
                                   InnerTuneImage4,
                                   InnerTuneImage5,
                                   InnerTuneImage6,
                                   InnerTuneImage7
                                ]
                            }
                        
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "2"
        },
        fields: {
            name: "Lumera",
            slug: "lumera",
            type: "Video Game",
            featured: true,
            preview: LumeraImage1,
            content: [
                {
                    fields: {
                        id: "1",
                        title: "Game Details",
                        paragraph: "Spring Semester 2018 \n \n Lumera is a 3D Action Role Playing Game where the summoned protagonist must save the world tree from the corrupted creatures set on destroying everything in their path. They must fight several bosses with the aid of a gun and sword bestowed by Lumera. Players will attack, dodge, and utilize a gauge system that will allow the player to attack with great power. \n \n Role: Game Designer / Programmer / 3D Modeler / Sound Designer \n \n This was a term project that I created with a team in Unreal Engine 4. With a thirst for knowledge and curiosity I worked on designing the level progression, and core gameplay, developed the models, animations, and ai for the Oni Brother bosses, scripted the players controls, attacks, and gauge system, work on the music and narrative system, as well as collaborating with my teammates on finishing different tasks.",
                        media:
                            {
                                type: "image",
                                url: LumeraImage2
                            }
                    }
                },
                {
                    fields: {
                        id: "2",
                        title: "Process",
                        paragraph: "One of the main challenges we faced while working on this game was learning and developing our skills while trying to create the game that we originally envisioned. As many of us had not specialized into a particular skill except for the 2D artist on our team we did a lot of self reflection on what parts of creating a game we really loved doing. For me, one of my favourite parts was the ideation, and developing of the core concept, as well as balancing the experience of the boss fight for the player. \n \n Within our time constraint we were able to create a game demo with 5 varying boss fights, as well as create a short narrative with cutscenes to showcase the story we developed for this RPG. Along with developing the main unique mechanic of the game, the gauge system which allowed the player to interact with the world. The way the mechanic works is that the player can charge up an attack which will pop up a guage meter where if the player timed it correctly they would perform an enhanced attack that would cause different interactions with different objects within the world. ",
                        media:
                            {
                                type: "image",
                                url: LumeraImage3
                            }
                    }
                },
                {
                    fields: {
                        id: "3",
                        title: "Reflection",
                        paragraph: "Overall we really appreciate the time we took to learn a new engine and to work with 3D as it helped us develop our current skills as well as learn many new ones. This experience gave a good insight to developing with constraints and working within a time crunch. We had so many ideas that we wanted to incorporate but had to cut down due to time constraints but the proudest interaction that we were able to add in was during the boss battle with a giant stone golem. \n \n With the gauge system, the player was able to reflect back the rock that the golem threw if they were able to time their attack which looked very cool when it was achieved. Though very hard to achieve we originally wanted the allow the player to experience to discover different ways to go about completing the level and defeating the boss.",
                        media: 
                            {
                                type: "gallery",
                                gallery: 
                                [
                                    LumeraImage4,
                                    LumeraImage5,
                                    LumeraImage6,
                                    LumeraImage7
                                ]
                            }
                        
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "3"
        },
        fields: {
            name: "Guiding Souls",
            slug: "guiding_souls",
            type: "Video Game",
            featured: true,
            preview: GuidingSoulsImage1,
            content: [
                {
                    fields: {
                        id: "1",
                        title: "Game Details",
                        paragraph: "Guiding Souls is a 2D puzzle game where the protagonist, a janitor of the underworld must find the lost souls of the dead and offer them to the portal to go to the next area. The player must collect these souls that will follow him and keep them safe from the many dangers and perils that the underworld commonly posseses.\n \n This game is a creation for the Global Game Jam 2021. I was able to assemble a team with a talented SFX Artist and a talented narrative designer which you can find more about on our itch.io page. Feel free to test out our game by downloading it from the official game jam page or our itch.io page.\n \n Role: Game Designer / Programmer \n \n https://agehm.itch.io/guiding-souls \n \n https://globalgamejam.org/2021/games/guiding-souls-6",
                        media:
                            {
                                type: "video",
                                url: "https://youtu.be/h1-V-hK0pFw"
                            }
                    }
            },
                {
                    fields: {
                        id: "2",
                        title: "Process",
                        paragraph: "Since this was my first game jam, there were many challenges with being unfamiliar with how the whole process is done. The first step I had to do was form a team as well as develop a game idea that matched the theme of Lost and Found. One of things that stuck to me was the Greek stories of the underworld, where souls are trapped with no sense of purpose, ideally fitting the role of lost. Since we decided to go with pixel art route we decided to turn the dark motif into a more comedic sense by introducing the protagonist as a janitor that has to clean up all the lost souls. \n \n The main mechanic that the player can play around with is the ability to throw the following souls forward as many of the souls move at a very slow pace. As the player finds different souls, enemies, and obstacles, the levels get harder and harder as the depths of the underworld get more complicated the deeper you delve. Players can also experience the story with some witty banter as the protagonist complains to himself about his situation and the world he is in.",
                        media:
                            {
                                type: "image",
                                url: GuidingSoulsImage2
                            }
                    }
                },
                {
                    fields: {
                        id: "3",
                        title: "Reflection",
                        paragraph: "This was a great experience, which helped push both my game design and scripting skills to the test. It has been a while since I worked with Unity but it was a great refresher and it taught me a lot of new things while creating the game. This experience gave me a lot of insight to all the different roles needed to creating a game. \n \n If we were to further develop this game, we would've loved to add more obstacles and interactions as well as more types of souls with various behaviours as well as more kinds of enemies. Overall this game jam was a great experience, and I look forward to joining more gam jams and meeting new people.",
                        media: 
                            {
                                type: "gallery",
                                gallery: 
                                [
                                    GuidingSoulsImage3,
                                    GuidingSoulsImage4,
                                    GuidingSoulsImage5,
                                    GuidingSoulsImage6,
                                    GuidingSoulsImage7,
                                    GuidingSoulsImage8
                                ]
                            }
                        
                    }
                }
            ]
        }
    }

];