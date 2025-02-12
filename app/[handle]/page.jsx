import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";
export default async function Page({ params }) {
    const handle = (await params).handle;
    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")
    //if the handle is aleready claimed you cannot create the bittree

    const item = await collection.findOne({ handle: handle })
    if (!item) {
        return notFound()
    }
    const item2 = {
            "_id": {
              "$oid": "67ab82aecf7a562db8bb19f7"
            },
            "links": [
              {
                "link": "https://www.linkedin.com/in/sana-asiwal18/",
                "linktext": "LinkedIn"
              },
              {
                "link": "https://github.com/18sana",
                "linktext": "GitHub"
              },
              {
                "link": "https://www.hackerrank.com/asiwalsana18",
                "linktext": "HackerRank"
              }
            ],
            "handle": "Sana",
            "pic": "https://media.licdn.com/dms/image/v2/D4D03AQH3hJ-IUlsecQ/profile-displayphoto-shrink_800_800/B4DZNorMheGUAg-/0/1732627975776?e=1744848000&v=beta&t=khOcl2Aa-mfmmUTFMRXAVn6L50-Td-F4y_NwgYMZdpQ",
            "desc": "Below given links will direct you with my profiles over different platform. You can check them out and get to know me more!!"
          }  

    return <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
        {item && <div className="photo flex justify-center flex-col items-center gap-4">
            <img
                className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-lg"
                src={item.pic}
                alt="Profile Picture"
            />
            <span className="font-bold text-xl mt-4">@{item.handle}</span>
            <span className="desc w-80 text-center">{item.desc}</span>
            <div className="links">
                {item.links.map((item, index) => {
                    return <Link key={index} href={item.link}>
                        <div className="bg-purple-100 py-4 shadow-lg px-2 rounded-md
                     my-3 min-w-96 flex justify-center" >
                            {item.linktext}
                        </div></Link>
                })}

            </div>
        </div>}
    </div>
}
