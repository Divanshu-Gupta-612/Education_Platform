import {
    Card,
    CardBody,
    Image,
    InputGroup,
    Input,
    InputRightElement,
    Select
} from "@chakra-ui/react";

export default function CoursesPricing() {

    let arr = [1, 1, 1]

    return (
        <div className=" px-20 py-10 flex flex-col gap-20">
            <Card>
                <CardBody>
                    <div className=" flex p-10 justify-between">
                        <div className=" w-1/3">
                            <div>Home | Pricing</div>
                            <div className=" text-4xl font-bold pt-10">
                                Our Pre-Ready Pricing Packages
                            </div>
                        </div>
                        <div>
                            Image
                        </div>
                    </div>
                </CardBody>
            </Card>
            <div className=" flex flex-col gap-5 text-center items-center">
                <div className=" text-4xl font-bold w-2/3">
                    We create a monthly pricing package for all standard students
                </div>
                <div className="  w-2/3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nemo dolores vel ullam excepturi praesentium illo quidem dicta cumque, animi, aliquam minima laboriosam soluta corrupti officia dolor quae sunt placeat id, eum voluptas optio obcaecati? Ex, laboriosam. Natus provident corporis delectus, optio a voluptates repellat sit aut animi, nam laborum.
                </div>
            </div>
            <div className=" flex gap-5">
                {
                    arr.map((item, index) =>
                        <Card key={index} className=" flex-1">
                            <CardBody>
                                <div>Logo</div>
                                <div className=" font-semibold text-xl">Pack Type</div>
                                <hr className=" border my-2"/>
                                <div>3 HD video lessons & tutorials</div>
                                <div>1 Offline exam</div>
                                <div>100 practice questions</div>
                                <div>1 month subscriptions</div>
                                <div>1 Free Book</div>
                                <div>Practice Quizzes & assignments</div>
                                <div>In depth explanations</div>
                                <div>Personal Instructor Assistance</div>
                                <div className=" text-lg font-semibold my-2">Price</div>
                                <button className=" text-orange-600 border-orange-600 p-1 rounded-md border my-1 w-full">Purchase Course</button>
                            </CardBody>
                        </Card>
                    )
                }
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