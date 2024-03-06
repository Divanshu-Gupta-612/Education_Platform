import { Card, CardHeader, CardBody, CardFooter, Image, InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react'

export default function CourseDetails() {

    let arr = [1, 1, 1, 1, 1, 1, 1, 1]
    let arr1 = [1, 1, 1, 1]

    return (
        <div className=' p-20 flex flex-col gap-16'>
            <Card className=' h-[500px]' >
                <CardBody className=' flex bg-gray-200 h-full'>
                    <div className=' w-2/3 pr-2'>
                        <div>Home | Courses | Course Details</div>
                        <video src="" className=' w-full border border-black my-2'></video>
                        <b>Video Title</b>
                    </div>
                    <div className=' pl-2 w-1/3 h-full'>
                        <b>Course Playlist</b>
                        <div className=' py-1 w-full h-full overflow-auto flex gap-2 flex-col'>
                            {
                                arr.map((item, index) =>
                                    <Card key={index}>
                                        <CardBody className=' flex gap-2'>
                                            <Image className='w-1/5 h-12'></Image>
                                            <div>
                                                <b>Video Name</b>
                                                <div>Duration</div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                )
                            }
                        </div>
                    </div>
                </CardBody>
            </Card>
            <div className=' flex'>
                <div className=' w-3/4'>
                    <div className=' flex flex-col gap-5'>
                        <div className=' flex flex-col gap-4'>
                            <b className=' text-2xl'>Course Details</b>
                            <div>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur velit soluta laudantium tenetur laborum vel eum sapiente consectetur itaque odio iusto expedita ipsam, debitis accusantium aperiam maiores! Vitae earum nam, ad, optio blanditiis magni quis esse laborum laudantium est officiis quia delectus explicabo minima. Laudantium illum fugit magni dolore odit ipsam quae consequuntur facere eveniet nobis amet, earum inventore impedit commodi nostrum doloremque illo recusandae vero ratione rerum alias totam? Distinctio illo odit aliquid est hic nihil, voluptas numquam tenetur perspiciatis sint explicabo et, maiores ipsum ullam exercitationem. Iure, ut corporis necessitatibus magnam fugiat explicabo incidunt ullam consequuntur veniam!
                            </div>
                        </div>
                        <div className=' flex flex-col gap-4'>
                            <b className=' text-2xl'>Certification</b>
                            <div>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni tenetur tempora deleniti iusto est, repudiandae molestiae libero odio illo reiciendis obcaecati, quia ducimus incidunt, earum quis aliquid natus fugiat cumque quibusdam aut. Officia, in inventore, eveniet dicta deleniti, nulla id iure consequuntur natus blanditiis odit possimus quaerat placeat est error saepe necessitatibus modi aliquam? Quia, quidem facilis! Ducimus ab similique, fugit asperiores sunt, tempora eum iste reprehenderit, aut cumque commodi.
                            </div>
                        </div>
                        <div className=' flex flex-col gap-4'>
                            <b className=' text-2xl'>Who this course is for</b>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dicta voluptatibus minima ex quae a quasi, unde dolores delectus sit consectetur, veritatis voluptas perspiciatis necessitatibus nostrum minus amet perferendis exercitationem? Unde doloribus quia tenetur. Veritatis, cupiditate quibusdam distinctio quia excepturi amet praesentium. Aliquid repellat, sit alias iure molestiae assumenda maiores?
                            </div>
                        </div>
                        <div className=' flex flex-col gap-4'>
                            <b className=' text-2xl'>What you'll learn in this course</b>
                            <div className=' flex flex-col gap-2'>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequuntur.
                                </div>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequuntur.
                                </div>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequuntur.
                                </div>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequuntur.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-1/4 flex-col flex gap-4 pl-5'>
                    <div className=' rounded-md p-5 bg-white flex flex-col gap-1'>
                        <div className=' flex justify-between'>
                            <div>Price</div>
                            <b className=' text-red-600'>300</b>
                        </div>
                        <div className=' flex justify-between'>
                            <div>Instructor</div>
                            <b className=' underline'>Wade Warren</b>
                        </div>
                        <div className=' flex justify-between'>
                            <div>Ratings</div>
                            <b>4.5</b>
                        </div>
                        <div className=' flex justify-between'>
                            <div>Durations</div>
                            <b>10 Days</b>
                        </div>
                        <div className=' flex justify-between'>
                            <div>Lessons</div>
                            <b>30</b>
                        </div>
                        <div className=' flex justify-between'>
                            <div>Quizzes</div>
                            <b>5</b>
                        </div>
                        <div className=' flex justify-between'>
                            <div>Cerificate</div>
                            <b>Yes</b>
                        </div>
                        <div className=' flex justify-between'>
                            <div>Language</div>
                            <b>English</b>
                        </div>
                        <div className=' flex justify-between'>
                            <div>Access</div>
                            <b>Lifetime</b>
                        </div>
                    </div>
                    <button className=' bg-red-600 w-full p-2 rounded-md text-white font-bold' >Purchase Course</button>
                </div>
            </div>
            <div>
                <b className=' text-4xl'>Similar Courses</b>
                <div className=' grid grid-cols-2 gap-5'>
                    {
                        arr1.map((item, index) =>
                            <Card key={index}>
                                <CardBody className=' flex gap-2'>
                                    <Image className='w-1/5 h-12'></Image>
                                    <div>
                                        <b>Video Name</b>
                                        <div>Duration</div>
                                    </div>
                                </CardBody>
                            </Card>
                        )
                    }
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
                                <InputRightElement width='4.5rem'>
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
