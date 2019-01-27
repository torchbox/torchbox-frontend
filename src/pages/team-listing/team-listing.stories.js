import React from 'react'
import { storiesOf } from '@storybook/react'

import TeamListingPage from './team-listing'

storiesOf('Pages', module).add('Team Listing', () => {
  return (
    <TeamListingPage
      title='Meet the team, [your swell digital pals].'
      team={ [
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/IMG_7958.JPG"
          },
          "firstName": "Natalie",
          "lastName": "Baker",
          "slug": "natalie-blackburn",
          "role": "Senior Project Manager"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/tbx_team-dan.jpg"
          },
          "firstName": "Dan",
          "lastName": "Braghis",
          "slug": "dan-braghis",
          "role": "Senior Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/IMG_0068.png"
          },
          "firstName": "Rich",
          "lastName": "Brennan",
          "slug": "rich-brennan",
          "role": "Python Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/tbx_team-alex.jpg"
          },
          "firstName": "Alex",
          "lastName": "Bridge",
          "slug": "alex-bridge",
          "role": "Senior Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/beach_cropped.jpg"
          },
          "firstName": "Victoria",
          "lastName": "Chan",
          "slug": "victoria-chan",
          "role": "Senior Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Helen.png"
          },
          "firstName": "Helen",
          "lastName": "Chapman",
          "slug": "helen-chapman",
          "role": "Front-end Team Leader"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/tbx_team-todd.jpg"
          },
          "firstName": "Todd",
          "lastName": "Dembrey",
          "slug": "todd-oliver-dembrey",
          "role": "Senior Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/tbx_team-phil-d.jpg"
          },
          "firstName": "Phil",
          "lastName": "Dexter",
          "slug": "phil-dexter",
          "role": "Senior Project Manager"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Ben_Dickinson.jpg"
          },
          "firstName": "Ben",
          "lastName": "Dickinson",
          "slug": "ben-dickinson",
          "role": "Python Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/tom_d.jpg"
          },
          "firstName": "Tom",
          "lastName": "Dyson",
          "slug": "tom-dyson",
          "role": "Technical Director"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/tbx_team-ben_1.jpg"
          },
          "firstName": "Ben",
          "lastName": "Enright",
          "slug": "ben-enright",
          "role": "Head of UX Design"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/tbx_team-bekah_1.jpg"
          },
          "firstName": "Bekah",
          "lastName": "Evans",
          "slug": "bekah-evans",
          "role": "Project Manager"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Simon_Evans.jpg"
          },
          "firstName": "Simon",
          "lastName": "Evans",
          "slug": "simon-evans",
          "role": "Senior Front-end Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/luiza_gQLRXDH.jpg"
          },
          "firstName": "Luiza",
          "lastName": "Frederico",
          "slug": "luiza-frederico",
          "role": "UX Consultant"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Maya_ErA5nim.png"
          },
          "firstName": "Maya",
          "lastName": "Gibbs",
          "slug": "maya-gibbs",
          "role": "Senior Project Manager"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/kim-2.jpg"
          },
          "firstName": "Kim",
          "lastName": "Grosvenor",
          "slug": "kim-grosvenor",
          "role": "Digital Marketing Executive"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Ellen_UyPunT0.jpg"
          },
          "firstName": "Ellen",
          "lastName": "Haggan",
          "slug": "ellen-haggan",
          "role": "Senior Project Manager"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Abigail.JPG"
          },
          "firstName": "Abigail",
          "lastName": "Hampson",
          "slug": "abigail-hampson",
          "role": "Project Manager"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Dave_Harris.jpg"
          },
          "firstName": "Dave",
          "lastName": "Harris",
          "slug": "dave-harris",
          "role": "Account Director"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Susan_Harrison_M2KXRtb.png"
          },
          "firstName": "Susan",
          "lastName": "Harrison",
          "slug": "susan-harrison",
          "role": "Financial Manager"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/tim.jpg"
          },
          "firstName": "Tim",
          "lastName": "Harrison",
          "slug": "tim-harrison",
          "role": "Web Analyst"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/4.jpg"
          },
          "firstName": "Georgie",
          "lastName": "Harty",
          "slug": "georgie-harty",
          "role": "Office Administrator"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/hq-4872.jpg"
          },
          "firstName": "Jenny",
          "lastName": "Hearn",
          "slug": "jennifer-hearn",
          "role": "SEO Analyst"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/tbx_team-will.jpg"
          },
          "firstName": "Will",
          "lastName": "Heinemann",
          "slug": "will-heinemann",
          "role": "Head of New Business"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/hq-3535.jpg"
          },
          "firstName": "Karl",
          "lastName": "Hobley",
          "slug": "karl-hobley",
          "role": "Python Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/kevin_howbrook.jpg"
          },
          "firstName": "Kevin",
          "lastName": "Howbrook",
          "slug": "kevin-brian-howbrook",
          "role": "Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/hq-3515.jpg"
          },
          "firstName": "Amina",
          "lastName": "Iqbal",
          "slug": "amina-iqbal",
          "role": "Digital Account Manager"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/AAEAAQAAAAAAAANEAAAAJGJlNDVlZWM2LWQ0MGQtNDNlNy04OWU3LWUzMzhkNGJmZDkzYw.jpg"
          },
          "firstName": "Melissa",
          "lastName": "Joy",
          "slug": "melissa-joy",
          "role": "Project Manager"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Tomasz_Knapik.jpg"
          },
          "firstName": "Tomasz",
          "lastName": "Knapik",
          "slug": "tomasz-knapik",
          "role": "Python Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Colin_Knowles.JPG"
          },
          "firstName": "Colin",
          "lastName": "Knowles",
          "slug": "colin-knowles",
          "role": "Sysadmin"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Cameron_Lamb.jpg"
          },
          "firstName": "Cameron",
          "lastName": "Lamb",
          "slug": "cameron-lamb",
          "role": "Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/YeenLau_outdoor.JPG"
          },
          "firstName": "Yeen",
          "lastName": "Lau",
          "slug": "yeen-lau",
          "role": "Project Manager"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/chris.jpg"
          },
          "firstName": "Chris",
          "lastName": "Lawton",
          "slug": "chris-lawton",
          "role": "Senior Front-end Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/james_leavesley2.jpg"
          },
          "firstName": "James",
          "lastName": "Leavesley",
          "slug": "james-leavesley",
          "role": "Operations Director"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/nicklee.jpg"
          },
          "firstName": "Nick",
          "lastName": "Lee",
          "slug": "nick-lee",
          "role": "Senior UX Designer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Katie_Locke.jpg"
          },
          "firstName": "Katie",
          "lastName": "Locke",
          "slug": "katie-locke",
          "role": "UX Architect"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/20170913_163803.jpg"
          },
          "firstName": "Kyle",
          "lastName": "Magee",
          "slug": "kyle-magee",
          "role": "UX Architect"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/1.jpg"
          },
          "firstName": "Gemma",
          "lastName": "Margretts",
          "slug": "gemma-margretts",
          "role": "HR Manager"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/hq-3500.jpg"
          },
          "firstName": "Phil",
          "lastName": "McMinn",
          "slug": "phil-mcminn",
          "role": "Head of Search & Analytics"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/DSCF2144e_39C4wx0.jpg"
          },
          "firstName": "Beth",
          "lastName": "Menzies",
          "slug": "beth-menzies",
          "role": "Front-end Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Mikalai.jpg"
          },
          "firstName": "Mikalai",
          "lastName": "Radchuk",
          "slug": "mikalai-radchuk",
          "role": "Python Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Sophie.jpg"
          },
          "firstName": "Sophie",
          "lastName": "Ramm",
          "slug": "sophie-ramm",
          "role": "Project Manager"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/hq-2825.jpg"
          },
          "firstName": "Tom",
          "lastName": "Readings",
          "slug": "tom-readings",
          "role": "Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Paul_Rose.jpg"
          },
          "firstName": "Paul",
          "lastName": "Rose",
          "slug": "paul-rose",
          "role": "Operations Manager"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/tbx_team-tom.jpg"
          },
          "firstName": "Tom",
          "lastName": "Saunders",
          "slug": "tom-saunders",
          "role": "Head of UX Research"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/nick_smith_2018.jpg"
          },
          "firstName": "Nick",
          "lastName": "Smith",
          "slug": "nick-smith",
          "role": "Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Neal_Todd_lYZT3MK.jpg"
          },
          "firstName": "Neal",
          "lastName": "Todd",
          "slug": "neal-todd",
          "role": "Senior Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/ben_d30RmxK.jpg"
          },
          "firstName": "Ben",
          "lastName": "Tuckwell",
          "slug": "ben-tuckwell",
          "role": "UX Designer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/iona_0nIwKDw.jpg"
          },
          "firstName": "Iona",
          "lastName": "Twiston-Davies",
          "slug": "iona-twiston-davies",
          "role": "Senior Digital Marketing Executive"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/IMG_3157.JPG"
          },
          "firstName": "Paul",
          "lastName": "Vetch",
          "slug": "paul-vetch",
          "role": "Client Services Director"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Helen_Warren_YbXiswO.png"
          },
          "firstName": "Helen",
          "lastName": "Warren",
          "slug": "dr-helen-warren",
          "role": "Senior Developer; Tech Team Leader"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Matthew.jpg"
          },
          "firstName": "Matthew",
          "lastName": "Westcott",
          "slug": "matthew-westcott",
          "role": "Senior Developer"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/chrisw.JPG"
          },
          "firstName": "Christopher",
          "lastName": "Whalen",
          "slug": "christopher-whalen",
          "role": "Search and Analytics Consultant"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/ros-3.jpg"
          },
          "firstName": "Ros",
          "lastName": "White",
          "slug": "ros-white",
          "role": "Senior Digital Marketing Executive"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/Olly_Willans_IG1p6zY.png"
          },
          "firstName": "Olly",
          "lastName": "Willans",
          "slug": "olly-willans",
          "role": "Creative Director"
        },
        {
          "image": {
            "src": "https://media.torchbox.com/original_images/tom_Wn9d51V.jpg"
          },
          "firstName": "Tom",
          "lastName": "Williams",
          "slug": "tom-williams",
          "role": "Account Director"
        }
      ]}
    />
  )
})


