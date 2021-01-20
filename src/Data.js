import img1 from "./Images/coming_soon.png"
import img2 from "./Images/testimage2.png"
import img3 from "./Images/testimage3.png"

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
                        paragraph: "August 2020 \n \n Inner Tune is a 3D Rhythm Action Game Project where the main character must face emotion boss versions of themself in various dreamscape worlds. \n \n Role: Solo Developer \n \n I created the game in Unreal Engine 4, the music in Reaper, the character model in VRoid Studio, the environment in Blender and used animations, and objects from Mixamo and Epic Games' Paragon assets.",
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
                        paragraph: "One of the main challenges of creating this first demo was incorporating the rhythm mechanic into the combat without over complicating the core gameloop. The way I tackled this was designing the boss attack patterns to match the song and creating a enhanced action system that follows a seperate rhytmic pattern. This allowed the player to have cues for each system and not be as overwhemled during combat.",
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
                        paragraph: "This first iteration was a great experience as I was able to learn a lot about the different roles of game developement and how each aspect of creating the game work together. After doing some internal balance testing and having friends try out the game, there is a lot of improve and further develop.",
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
                        paragraph: "Spring Semester 2018 \n \n Lumera is a 3D Action Role Playing Game where the summoned protagonist must save the world tree from the corrupted creatures set on destroying everything in their path. \n \n Role: Game Designer / Developer \n \n This was a term project that I created with a team in Unreal Engine 4. We had to get out of our comfort zone and learn many new skills to achieve our ambitions of creating a game in a engine we had no experience in.",
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
                        paragraph: "One of the main challenges we faced while working on this game was achieving the milestones and requirements of the project while learning how to create the game in Unreal Engine 4 as many of only had experience in Unity. The way we tackled this was by having each member focus on what they were best at then merging code together after certain milestones. The component I focused on was developing the core game loop and creating the base code to incorporating the different requriments that we needed.",
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
                        paragraph: "After the turmoil and struggles of game development, we were quite satisfied with what we were able to create within the time frame of a semester as well as choosing to use an entirely new game engine. This experience gave a good insight to developing with constraints and working within a time crunch as well as introduced us to discovering a new set of skills that we didn't know we had.",
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
            name: "Time Potato",
            slug: "time_potato",
            type: "Tabletop Game",
            featured: true,
            preview: img1,
            content: [
                {
                    fields: {
                        id: "1",
                        title: "Game Details",
                        paragraph: "August 2020 \n \n Inner Tune is a 3D Rhythm Action Game Project where the main character must face emotion boss versions of themself in various dreamscape worlds. \n \n Role: Solo Developer \n \n I created the game in Unreal Engine 4, the music in Reaper, the character model in VRoid Studio, the environment in Blender and used animations, and objects from Mixamo and Epic Games' Paragon assets.",
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
                        paragraph: "One of the main challenges of creating this first demo was incorporating the rhythm mechanic into the combat without over complicating the core gameloop. The way I tackled this was designing the boss attack patterns to match the song and creating a enhanced action system that follows a seperate rhytmic pattern. This allowed the player to have cues for each system and not be as overwhemled during combat.",
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
                        paragraph: "This first iteration was a great experience as I was able to learn a lot about the different roles of game developement and how each aspect of creating the game work together. After doing some internal balance testing and having friends try out the game, there is a lot of improve and further develop.",
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
            id: "4"
        },
        fields: {
            name: "Project Somu",
            slug: "somu",
            type: "Tabletop Game",
            featured: true,
            preview: img1,
            content: [
                {
                    fields: {
                        id: "1",
                        title: "Game Details",
                        paragraph: "August 2020 \n \n Inner Tune is a 3D Rhythm Action Game Project where the main character must face emotion boss versions of themself in various dreamscape worlds. \n \n Role: Solo Developer \n \n I created the game in Unreal Engine 4, the music in Reaper, the character model in VRoid Studio, the environment in Blender and used animations, and objects from Mixamo and Epic Games' Paragon assets.",
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
                        paragraph: "One of the main challenges of creating this first demo was incorporating the rhythm mechanic into the combat without over complicating the core gameloop. The way I tackled this was designing the boss attack patterns to match the song and creating a enhanced action system that follows a seperate rhytmic pattern. This allowed the player to have cues for each system and not be as overwhemled during combat.",
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
                        paragraph: "This first iteration was a great experience as I was able to learn a lot about the different roles of game developement and how each aspect of creating the game work together. After doing some internal balance testing and having friends try out the game, there is a lot of improve and further develop.",
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
    }

];