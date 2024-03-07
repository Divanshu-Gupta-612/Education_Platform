import {
    Card,
    CardBody,
    Image,
    InputGroup,
    Input,
    InputRightElement,
} from "@chakra-ui/react";

export default function MentorDetails() {

    let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <div className=" px-20 py-10 flex flex-col gap-20">
            <Card>
                <CardBody>
                    <div className=" flex p-5 gap-5 flex-col justify-between">
                        <div>Home | Mentor | Mentor Name</div>
                        <div className=" flex gap-5">
                            <Image className=" w-40 h-40 rounded-lg"></Image>
                            <div className=" flex flex-col justify-between">
                                <div></div>
                                <div>
                                    <div className=" font-semibold">Mentor Name</div>
                                    <div>Founder & Mentor</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <div className=" flex">
                <div className=" flex flex-col gap-10 w-2/3 ">
                    <div className=" flex justify-between gap-2">
                        <button className=" bg-white shadow-sm p-1 flex-1 rounded-md font-semibold">About</button>
                        <button className=" bg-white shadow-sm p-1 flex-1 rounded-md font-semibold">Courses</button>
                        <button className=" bg-white shadow-sm p-1 flex-1 rounded-md font-semibold">Reviews</button>
                        <button className=" bg-white shadow-sm p-1 flex-1 rounded-md font-semibold">Contact</button>
                    </div>
                    <div className=" flex flex-col gap-5">
                        <div className=" font-bold text-2xl">About Mentor</div>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, aut doloremque unde, enim odio culpa facere nam voluptatum possimus debitis veritatis dolorem quam! Consequatur accusamus dolorum tempore aspernatur harum numquam quidem officiis accusantium, aperiam vitae non atque id, voluptas beatae. Corporis eveniet tenetur omnis iure deserunt ex autem harum asperiores?</div>
                    </div>
                    <div className=" flex flex-col gap-5">
                        <div className=" font-bold text-2xl">Certification</div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae ipsa laudantium et temporibus magnam distinctio eligendi minus, atque esse fuga dolores modi saepe mollitia aspernatur animi possimus aperiam voluptatibus.</div>
                    </div>
                </div>
                <div className=" w-1/3 px-10">
                    <div className=' rounded-md p-5 bg-white flex flex-col gap-1'>
                        <div className=' flex justify-between'>
                            <div>Total Courses</div>
                            <b className=' text-red-600'>30</b>
                        </div>
                        <div className=' flex justify-between'>
                            <div>Ratings</div>
                            <b>4.9 (153)</b>
                        </div>
                        <div className=' flex justify-between'>
                            <div>Experiences</div>
                            <b>10 Years</b>
                        </div>
                        <div className=' flex justify-between'>
                            <div>Graduated</div>
                            <b>Yes</b>
                        </div>
                        <div className=' flex justify-between'>
                            <div>Language</div>
                            <b>English, French</b>
                        </div>
                        <div className=' flex justify-between'>
                            <div>Social</div>
                            <b>XYZ</b>
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
                            <div></div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
