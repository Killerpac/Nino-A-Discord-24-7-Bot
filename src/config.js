require("dotenv").config();

module.exports = {
  secret: {
    TOKEN: process.env["TOKEN"],
    CHANNEL: process.env["CHANNEL"],
    STATUS: process.env["STATUS"] ? process.env["STATUS"] : "Music 24/7",
    TOPIC: process.env["TOPIC"] ? process.env["TOPIC"] : "Lo-Fi Vibes 24/7",
    LINKS: `${process.env["LINKS"]},https://www.youtube.com/watch?v=hoCYoJrewzc&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=1,https://www.youtube.com/watch?v=mYiGEu02-4E&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=2,https://www.youtube.com/watch?v=AXChPb4aXHw&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=3,https://www.youtube.com/watch?v=mpl55zJA1vY&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=4,https://www.youtube.com/watch?v=WN__q8Ew1KE&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=7,https://www.youtube.com/watch?v=i21qDBVce0I&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=8,https://www.youtube.com/watch?v=flHZyRXD7Xk&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=9,https://www.youtube.com/watch?v=0qAyOLS0g4o&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=10,https://www.youtube.com/watch?v=yZOGEeKAgyU&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=11,https://www.youtube.com/watch?v=gqPhHIbruTo&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=12,https://www.youtube.com/watch?v=GEFCR1D-kTM&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=13,https://www.youtube.com/watch?v=49rbyoBOr6A&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=14,https://www.youtube.com/watch?v=sw01kcXvwfQ&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=15,https://www.youtube.com/watch?v=nma7K1mmtdE&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=16,https://www.youtube.com/watch?v=3aUlG3mPJhE&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=17,https://www.youtube.com/watch?v=-gx0-rVML9w&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=18,https://www.youtube.com/watch?v=FWSS4zQqH6c&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=19,https://www.youtube.com/watch?v=zYHXESCKlek&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=20,https://www.youtube.com/watch?v=qDc17VJtYcQ&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=21,https://www.youtube.com/watch?v=nqWzBCwWWQw&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=22,https://www.youtube.com/watch?v=gex8LywI8ME&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=23,https://www.youtube.com/watch?v=nHqxrMIU0eI&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=24,https://www.youtube.com/watch?v=Fy0IAG-d3Ak&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=25,https://www.youtube.com/watch?v=maJdfsjUFw4&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=26,https://www.youtube.com/watch?v=HB8zJOR8Zsw&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=27,https://www.youtube.com/watch?v=4jYRwHLLs_A&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=28,https://www.youtube.com/watch?v=7Rv4kRyZIPE&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=29,https://www.youtube.com/watch?v=B0brahYxj7M&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=30,https://www.youtube.com/watch?v=Wujbishrmjw&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=31,https://www.youtube.com/watch?v=NN0OCn7vgfA&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=32,https://www.youtube.com/watch?v=_VzoRKUIWXA&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=33,https://www.youtube.com/watch?v=QqyZ-D34YK8&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=34,https://www.youtube.com/watch?v=a1BUgVpR45U&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=35,https://www.youtube.com/watch?v=NsF42NHWJNo&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=36,https://www.youtube.com/watch?v=RqNJBXMyagw&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=37,https://www.youtube.com/watch?v=oonjCd6I9O4&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=38,https://www.youtube.com/watch?v=_dBphaTVhOA&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=39,https://www.youtube.com/watch?v=JOUc7RjbgmY&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=40,https://www.youtube.com/watch?v=g6zkHp72Ifo&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=41,https://www.youtube.com/watch?v=cTO6JwF1PvA&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=42,https://www.youtube.com/watch?v=wWZlY5q67RA&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=43,https://www.youtube.com/watch?v=vQ6pnABFuys&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=44,https://www.youtube.com/watch?v=JDzqTE29IbE&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=45,https://www.youtube.com/watch?v=AAABNp65rmY&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=46,https://www.youtube.com/watch?v=cOb63w8zCEE&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=47,https://www.youtube.com/watch?v=rWUxBjFzERE&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=48,https://www.youtube.com/watch?v=JnxgYJvGMBg&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=49,https://www.youtube.com/watch?v=RKlNLBi4wNY&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=50,https://www.youtube.com/watch?v=3CCNOmMjj6E&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=51,https://www.youtube.com/watch?v=cWBD0-1cX1g&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=52,https://www.youtube.com/watch?v=0ZY0Ecdz8X8&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=53,https://www.youtube.com/watch?v=MewxRGzAnZY&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=54,https://www.youtube.com/watch?v=DygebyUeTPg&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=55,https://www.youtube.com/watch?v=hh7JF_1tcBQ&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=56,,https://www.youtube.com/watch?v=4WsnATHZ46E&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=58,https://www.youtube.com/watch?v=0m-GgRSzeQk&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=59,https://www.youtube.com/watch?v=Rao3iAb3luA&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=60,https://www.youtube.com/watch?v=8U2fkuv_k3s&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=61,https://www.youtube.com/watch?v=tN0CtrT-nWM&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=62,https://www.youtube.com/watch?v=buXtO72PtLg&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=63,https://www.youtube.com/watch?v=wgkRBNpgV8U&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=64,https://www.youtube.com/watch?v=Afnv81bTWN8&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=65,https://www.youtube.com/watch?v=XLRj3UpUj2Y&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=67,https://www.youtube.com/watch?v=_qL1Xnm9Dms&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=68,https://www.youtube.com/watch?v=qX9avQv4LU8&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=69,https://www.youtube.com/watch?v=z419bMP5BIU&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=70,https://www.youtube.com/watch?v=5p-E1ZGHZFA&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=71,https://www.youtube.com/watch?v=KwviqJMwUP8&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=72,https://www.youtube.com/watch?v=F0sfCw50pcs&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=73,https://www.youtube.com/watch?v=celLPVXbLOk&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=74,https://www.youtube.com/watch?v=Pd6OSqZYAiA&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=75,https://www.youtube.com/watch?v=yRV30ovVv7w&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=76,https://www.youtube.com/watch?v=Fa6Z2yVRGBA&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=77,https://www.youtube.com/watch?v=QVoVZ2hT3K8&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=78,https://www.youtube.com/watch?v=poRfAxr2WGo&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=79,https://www.youtube.com/watch?v=QGyJ-a0RC88&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=80,https://www.youtube.com/watch?v=TPzq1d5SBMs&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=81,https://www.youtube.com/watch?v=BLlUMw--IWk&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=82,https://www.youtube.com/watch?v=N9PMmDPO-8U&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=83,https://www.youtube.com/watch?v=tDy3UzUYd9A&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=84,https://www.youtube.com/watch?v=A5B7TBSpCj8&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=85,https://www.youtube.com/watch?v=lOCTc-id7IU&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=86,https://www.youtube.com/watch?v=sad0PedUr1M&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=87,https://www.youtube.com/watch?v=-W_m1YPos8Y&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=88,https://www.youtube.com/watch?v=7jaztirVWVY&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=89,https://www.youtube.com/watch?v=1hn_FuaZxHQ&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=90,https://www.youtube.com/watch?v=PrH3wclF5-I&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=91,https://www.youtube.com/watch?v=OWRKW2ToypA&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=92,https://www.youtube.com/watch?v=VWX8z074XII&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=93,https://www.youtube.com/watch?v=rHxo4Ms1YIg&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=94,https://www.youtube.com/watch?v=eeETWfHLhfU&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=95,https://www.youtube.com/watch?v=S89lJysA9nU&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=96,https://www.youtube.com/watch?v=AaEipe7F-yQ&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=97,https://www.youtube.com/watch?v=BENhq9WMnrA&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=98,https://www.youtube.com/watch?v=Z1H0H2B4zBI&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=99,https://www.youtube.com/watch?v=zfbW2o6Vx_U&list=PLiP8-CkZzKEjgvRqTFF7uUmLji6OnrjID&index=100`,
  },
};
