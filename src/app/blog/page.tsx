import Home from "../page"
import Footer from "../footer/page"
import { Button } from "~/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "~/components/ui/card"




export default function Blog(){
    return(
        <div>
            <Home></Home>
        <div className="grid grid-auto-fit justify-center items-center gap-4 m-10">

            <div className="grid1-item items-center">
                <Card className="">
                    <CardHeader>Blog</CardHeader>
                </Card>
            </div>



        </div>
        </div>
    )
}