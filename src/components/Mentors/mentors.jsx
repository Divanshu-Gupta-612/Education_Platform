import {
    Card,
    CardBody,
    Image,
    InputGroup,
    Input,
    InputRightElement,
} from "@chakra-ui/react";

export default function Mentors() {

    let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <div className=" px-20 py-10 flex flex-col gap-20">
            <Card>
                <CardBody>
                    <div className=" flex p-10 justify-between">
                        <div className=" w-1/3">
                            <div>Home | Our Mentors</div>
                            <div className=" text-4xl font-bold pt-10">
                                Educasty has the qualified mentor
                            </div>
                        </div>
                        <div>
                            Image
                        </div>
                    </div>
                </CardBody>
            </Card>
            <div className=" flex justify-center">
                <div className=" flex justify-between gap-2 w-2/3 ">
                    <button className=" bg-white shadow-sm p-1 flex-1 rounded-md font-semibold">All Mentors</button>
                    <button className=" bg-white shadow-sm p-1 flex-1 rounded-md font-semibold">For Kindergarten</button>
                    <button className=" bg-white shadow-sm p-1 flex-1 rounded-md font-semibold">For High School</button>
                    <button className=" bg-white shadow-sm p-1 flex-1 rounded-md font-semibold">For Collage</button>
                    <button className=" bg-white shadow-sm p-1 flex-1 rounded-md font-semibold">For Technology</button>
                </div>
            </div>
            <div>
                <div className=" grid grid-cols-4 gap-5">
                    {
                        arr.map((item, index) =>
                            <div className=" flex flex-col gap-2">
                                <Image className=" w-60 h-60 rounded-lg bg-white"></Image>
                                <div className=" font-semibold">Mentor Name</div>
                                <div>Founder & Mentor</div>
                            </div>
                        )
                    }
                </div>
                <div className=" flex justify-center pt-10">
                    <div className=" flex gap-2">
                        <button className=" p-2 bg-white text-orange-600">l</button>
                        <div className=" p-2">Page 5 of 80</div>
                        <button className=" p-2 bg-white rounded-md text-orange-600">r</button>
                    </div>
                </div>
            </div>
            <div>
                <Card>
                    <CardBody className=' bg-red-950 text-white rounded-xl flex justify-center items-center'>
                        <div className=' flex flex-col w-3/5 gap-10'>
                            <div></div>
                            <b className=' text-5xl text-center'>Subscribe For Get Update Every New Courses</b>
                            <InputGroup size='md' className=' overflow-hidden rounded-md'>
                                <Input
                                    pr='4.5rem'
                                    type='email'
                                    placeholder='Enter your Email'
                                />
                                <InputRightElement width='4.5rem' className=" pr-8">
                                    <button h='1.75rem' className=' p-5 bg-orange-600 text-white'>
                                        Subscribe
                                    </button>
                                </InputRightElement>
                            </InputGroup>
                            <div></div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
