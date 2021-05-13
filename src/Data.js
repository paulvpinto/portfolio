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
                        paragraph: "August 2020 // Role: Solo Developer \n \n Inner Tune is a 3D Rhythm Action Game where the protagonist must face their emotions head on in various dreamscape worlds. They must utilize the power to perform enhanced actions according to their own beat while dodging the attacks of the bosses that match with their song. \n \n My responsibilities included \n -Blueprint scripting the game in Unreal Engine 4 \n -Designing a three phase boss fight \n -Designing a rhythmic battle system \n -Producing the music and sound for the level \n -Acquiring and creating placeholder assets for the demo",
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
                        title: "The Design",
                        paragraph: "The main inspiration for the game was utilizing the emotional impact music has on an individual. So the first system I designed was creating a boss battle that followed the flow of the music. For the first boss, the basic pattern of attack changes every time the song transitions between each part such as intro to verse, verse to chorus, and etc. This allowed players to grasp the bosses mechanics even as the boss went rampant in the later phases as it still followed the same attack pattern. \n \n The next core system was incorporating a rhythm mechanic for the player to time as they fought against the bosses. After some trial and error, I designed a system that wasn’t too distracting and still flowed well with level’s music. There is a drum beat that pulses every bar throughout the song, and whenever the player performs an action at the correct timing they will perform an enhanced version of that action. This allowed for an epic battle against the boss that rewarded player’s who were able to stay in tune.",
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
                        paragraph: "This first iteration was a great experience as I was able to learn a lot about the different roles of game development and how each aspect of creating the game worked together. After doing some internal balance testing and having friends try out the game, there is a lot to improve. I hope to better emphasize the role of music in the game as well as to design future worlds to be more whimsicial and magical. \n \n In the future, I plan to create several bosses and levels that encompass a different emotion, creating music and designing the world and level to match each motif. The story follows the protagonist overcoming his overflowing emotions with the help of music. Some examples of upcoming bosses would be a red, angry boss which uses metal, rock, or rap, another one would be a yellow, happy boss which uses pop, or funk.",
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
                        paragraph: "Spring Semester 2018 // Role: Game Designer / Programmer / 3D Modeler \n \n Lumera is a 3D Action Role Playing Game where the summoned protagonist must save the world tree from the corrupted creatures set on destroying everything in their path. They must fight several bosses with the aid of a gun and sword bestowed by Lumera. Players will attack, dodge, and utilize a gauge system that will allow the player to attack with great power. \n \n My responsibilities included \n -Blueprint scripting parts of the game in Unreal Engine 4 \n -Designing the three starting boss fights \n -Modeling the three starting boss fights \n -Consolidating and overseeing all parts of the game",
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
                        title: "The Design",
                        paragraph: "One of the concepts we incorporated into our game was an increasing difficulty progression for each boss that the player defeats as well as creating fights and levels that taught the player the mechanics needed to face the next upcoming bosses. The intro bosses that we designed were used to teach the player how to jump, attack, dodge, and utilize the special attack. The first set of bosses were called the Oni Brothers with the youngest being the weakest and the oldest being the strongest. \n \n The core mechanic that we designed the whole game around was a special attack that would only trigger if the player was able to release their attack at a specific range on a swinging gauge. These special attacks would cause special interactions with different objects in the game such as breaking boulders, interrupting a bosses’ channeling move, or deflecting projectiles. This encouraged player’s to really think about their surroundings and think outside the box when facing great enemies.",
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
                        paragraph: "Within our time constraint we were able to create a game demo with 5 varying boss fights, as well as create a short narrative with cutscenes to showcase the story we developed for this RPG. Along with developing the main unique mechanic of the game, the gauge system which allowed the player to interact with the world. The way the mechanic works is that the player can charge up an attack which will pop up a gauge meter where if the player timed it correctly they would perform an enhanced attack that would cause different interactions with different objects within the world. \n \n Overall we really appreciate the time we took to learn a new engine and to work with 3D as it helped us develop our current skills as well as learn many new ones. This experience gave a good insight to developing with constraints and working within a time crunch. Our greatest interaction with the mechanic we designed was reflecting back a thrown rock if the player was able to time the special attack correctly. This type of interaction was what we were aiming for with the boss battles and would have liked to further pursue the different experiences that this would create.",
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
                        paragraph: "January 2021 // Role: Game Designer / Programmer \n \n Guiding Souls is a 2D puzzle game where the protagonist, a janitor of the underworld must find the lost souls of the dead and offer them to the portal to go to the next area. The player must collect these souls that will follow him and keep them safe from the many dangers and perils that the underworld commonly possesses.\n \n My responsibilities included \n -Scripting the game in Unity \n -Designing all the levels \n \n https://agehm.itch.io/guiding-souls \n \n https://globalgamejam.org/2021/games/guiding-souls-6",
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
                        title: "The Design",
                        paragraph: "The main goal of the player is to collect lost souls scattered around a level and to drop them off into the portal. This introduces the main gimmick where the collected souls follow the player at a slower pace and will stack in a line as more are collected similar to how the eggs follow Yoshi in Yoshi’s Island. The player must guide these souls through the level leading them past obstacles and enemies which will send them back running to their original spot. \n \n As there are many obstacles and enemies, a mechanic we designed to aid the player is the ability to throw souls forward with a faster speed than normal. This allows the player to maneuver past various obstacles and enemies which would be very difficult to do if just trying to only sneak past them. This allows for some interesting levels as the player can use their surroundings to their advantage as souls will stop as soon as they collide with walls. ",
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
                        paragraph: "This was a great experience, which helped push both my game design and scripting skills to the test. It has been a while since I worked with Unity but it was a great refresher and it taught me a lot of new things while creating the game. With such a short time to come up with a design and create a game from scratch, it gave me such thrilling experience working to complete the game in a time crunch. \n \n If we were to further develop this game, we would've loved to add more obstacles and interactions as well as more types of souls with various behaviours as well as more kinds of enemies. Overall this game jam was a great experience, and I look forward to joining more game jams and meeting new people.",
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