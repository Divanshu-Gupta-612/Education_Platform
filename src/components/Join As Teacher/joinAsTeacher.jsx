import {
    Card,
    CardBody,
    Image,
    InputGroup,
    Input,
    InputRightElement,
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel
} from "@chakra-ui/react";

export default function JoinAsTeacher() {
    return (
        <div className=" px-20 py-10 flex flex-col gap-20">
            <Card>
                <CardBody>
                    <div className=" flex p-10 justify-between">
                        <div className=" w-1/3">
                            <div>Home | Become An Instructor</div>
                            <div className=" text-4xl font-bold pt-10">
                                Join Educasty as a Mentor
                            </div>
                        </div>
                        <div>
                            Image
                        </div>
                    </div>
                </CardBody>
            </Card>
            <div className=" flex">
                <div className=" px-10 flex-1">Image</div>
                <div className=" flex-1 px-10 flex flex-col gap-5">
                    <b className=" text-3xl">Apply As Instructor</b>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corporis nam nobis, voluptatem natus debitis labore recusandae ut quasi modi. Mollitia tenetur accusantium maxime quos in pariatur perferendis vero ullam veniam corporis fugit recusandae, officia iure quam facere autem molestias impedit dolore consequuntur nulla temporibus voluptatum. Officia, expedita. Eius, quasi?</div>
                    <Tabs>
                        <TabList>
                            <Tab>Instructor Requirements</Tab>
                            <Tab>Instructor Rules</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel className=" flex flex-col gap-2">
                                <div>An undergraduate degree</div>
                                <div>Participate in supervised teaching</div>
                                <div>State teaching license</div>
                                <div>Pursue graduate studies</div>
                            </TabPanel>
                            <TabPanel className=" flex flex-col gap-2">
                                <div>Rule 1</div>
                                <div>Rule 2</div>
                                <div>Rule 3</div>
                                <div>Rule 4</div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <button className=" ml-2 text-white w-fit bg-orange-600 rounded-md p-2 px-5">Apply Now</button>
                </div>
            </div>
            <div>
                <div className=" text-4xl font-bold text-center">How To Apply To Join As Instructor</div>
                <div className=" p-10 border-white border-[40px] m-10 rounded-lg overflow-hidden">
                <video src="" className=" w-full rounded-lg" ></video>
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
