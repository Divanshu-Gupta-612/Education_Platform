import {
    Card,
    CardBody,
    Image,
    InputGroup,
    Input,
    InputRightElement,
    Select
} from "@chakra-ui/react";

export default function Courses() {

    let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    let arr1 = [1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <div className=" px-20 py-10 flex flex-col gap-20">
            <Card>
                <CardBody>
                    <div className=" flex p-10 justify-between">
                        <div className=" w-1/3">
                            <div>Home | Courses</div>
                            <div className=" text-4xl font-bold pt-10">
                                Educatsy Courses For All Standards
                            </div>
                        </div>
                        <div>
                            Image
                        </div>
                    </div>
                </CardBody>
            </Card>
            <div className=" flex justify-between gap-2">
                <button className=" bg-white shadow-sm p-1 flex-1 rounded-md font-semibold">All Courses</button>
                <button className=" bg-white shadow-sm p-1 flex-1 rounded-md font-semibold">Kindergarten</button>
                <button className=" bg-white shadow-sm p-1 flex-1 rounded-md font-semibold">High School</button>
                <button className=" bg-white shadow-sm p-1 flex-1 rounded-md font-semibold">Collage</button>
                <button className=" bg-white shadow-sm p-1 flex-1 rounded-md font-semibold">Computer</button>
                <button className=" bg-white shadow-sm p-1 flex-1 rounded-md font-semibold">Science</button>
                <button className=" bg-white shadow-sm p-1 flex-1 rounded-md font-semibold">Engineering</button>
                <button className=" bg-white shadow-sm p-1 flex-1 rounded-md font-semibold">More Courses</button>
            </div>
            <div>
                <div className=" text-3xl font-semibold pb-10">Standard Classes</div>
                <div className=" grid grid-cols-4 gap-2">
                    {
                        arr.map((item, index) =>
                            <Card key={index} className=" text-center">
                                <CardBody className=" flex flex-col gap-4">
                                    <div>Class logo</div>
                                    <b>Class Name</b>
                                    <div>Lorem ipsum dolor sit amet, consectetu flex flex-col gap-4r adipisicing elit. Quidem, nihil.</div>
                                    <button className=" w-full p-1 border-orange-600 text-orange-600 border rounded-md">Class Details</button>
                                </CardBody>
                            </Card>
                        )
                    }
                </div>
            </div>
            <div className=" flex flex-col gap-5">
                <div className=" text-3xl font-semibold pb-5">Other Courses FOr High School</div>
                <div className=" grid grid-cols-3 gap-4">
                    <div className=" col-span-2 bg-white">
                        <InputGroup className=" overflow-hidden rounded-md">
                            <Input
                                pr='4.5rem'
                                placeholder='Enter password'
                            />
                            <InputRightElement className=" pr-10 rounded-sm">
                                <button className=" bg-orange-600 p-4 text-white">
                                    Search
                                </button>
                            </InputRightElement>
                        </InputGroup>
                    </div>
                    <div className=" bg-white">
                        <Select placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </div>
                </div>
                <div className=" grid grid-cols-2 gap-2">
                    {
                        arr1.map((item, index) =>
                            <Card key={index}>
                                <CardBody className=' flex gap-2'>
                                    <Image className='w-1/5 h-18'></Image>
                                    <div>
                                        <b>Video Name</b>
                                        <div>Ratings</div>
                                        <div className=" text-orange-600">Price</div>
                                    </div>
                                </CardBody>
                            </Card>
                        )
                    }
                </div>
                <div className=" flex justify-center">
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
