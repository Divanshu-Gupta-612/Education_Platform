import {
    Card,
    CardBody,
    Image,
    InputGroup,
    Input,
    InputRightElement,
    Select
} from "@chakra-ui/react";

export default function Shop() {

    let arr = [1, 1, 1]
    let arr1 = [1, 1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <div className=" px-20 py-10 flex flex-col gap-20">
            <Card>
                <CardBody>
                    <div className=" flex p-10 justify-between">
                        <div className=" w-1/3">
                            <div>Home | Shop</div>
                            <div className=" text-4xl font-bold pt-10">
                                Educatsy Online Book Shop
                            </div>
                        </div>
                        <div>
                            Image
                        </div>
                    </div>
                </CardBody>
            </Card>
            <div className=" flex">
                <div className=" w-1/3 px-5">
                    <div className=" flex flex-col gap-2">
                        <b className=" text-3xl">Popular Books</b>
                        {
                            arr.map((item, index) =>
                                <Card key={index}>
                                    <CardBody className=' flex gap-2'>
                                        <Image className='w-1/5 h-20'></Image>
                                        <div>
                                            <div>Rating</div>
                                            <b>Book Name</b>
                                            <div className=" text-red-600">30</div>
                                        </div>
                                    </CardBody>
                                </Card>
                            )
                        }
                        <div className=" text-red-600">See more</div>
                    </div>
                    <div className=" flex flex-col gap-2 pt-10">
                        <b className=" text-3xl">New Arrivals</b>
                        {
                            arr.map((item, index) =>
                                <Card key={index}>
                                    <CardBody className=' flex gap-2'>
                                        <Image className='w-1/5 h-20'></Image>
                                        <div>
                                            <div>Rating</div>
                                            <b>Book Name</b>
                                            <div className=" text-red-600">30</div>
                                        </div>
                                    </CardBody>
                                </Card>
                            )
                        }
                        <div className=" text-red-600">See more</div>
                    </div>
                </div>
                <div className=" w-2/3 pl-10 flex flex-col gap-4">
                    <div className=" grid grid-cols-4 justify-between gap-2">
                        <button className=" bg-white shadow-sm p-2 px-4 rounded-md font-semibold">All Books</button>
                        <button className=" bg-white shadow-sm p-2 px-4 rounded-md font-semibold">Kindergarten</button>
                        <button className=" bg-white shadow-sm p-2 px-4 rounded-md font-semibold">High School</button>
                        <button className=" bg-white shadow-sm p-2 px-4 rounded-md font-semibold">Collage</button>
                    </div>
                    <div className=" grid grid-cols-3 gap-2">
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
                        {
                            arr1.map((item, index) =>
                                <div key = {index}>
                                    <Card>
                                        <CardBody>
                                            <div className=" flex justify-center items-center">
                                                <Image className=" w-40 h-40"></Image>
                                            </div>
                                        </CardBody>
                                    </Card>
                                    <div className=" p-1 px-2">
                                        <b>Book Name</b>
                                        <div className=" flex justify-between">
                                            <div className=" text-red-600">Price</div>
                                            <div>Rating</div>
                                        </div>
                                    </div>
                                </div>
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
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}