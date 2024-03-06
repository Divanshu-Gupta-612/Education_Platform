import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    InputGroup,
    Input,
    InputRightElement,
    Button,
    Checkbox
} from '@chakra-ui/react'

export default function SignIn() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <div className=' flex justify-center items-center'>
            <Card className=' w-2/3'>
                <CardBody>
                    <div className=' flex justify-between items-center'>
                        <div className=' w-[48%] flex flex-col gap-10 py-10'>
                            <div>Logo</div>
                            <div className=' text-5xl font-bold'>Welcome to Education Online Learning Platform</div>
                            <div>Picture</div>
                        </div>
                        <hr className=' border border-black border-1[px] h-[200px]' />
                        <div className=' w-[48%] p-10 flex flex-col gap-5'>
                            <button className=' rounded-md border p-2'>Sign In with Google</button>
                            <div className=' text-center'>
                                ------- or Sign in with your email -------
                            </div>
                            <div>
                                <label className=' font-semibold'>Email</label>
                                <Input placeholder='user@example.com' />
                            </div>
                            <div>
                                <label className=' font-semibold'>Password</label>
                                <InputGroup size='md'>
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </div>
                            <button className=' rounded-md p-2 bg-red-600 text-white font-semibold'>Sign Up</button>
                            <div className=' items-center flex justify-center'>
                                <Checkbox className=' w-fit'>I agreed to the terms and conditions</Checkbox>
                            </div>
                            <div className=' text-center'>
                                Don't have an account? <span className=' text-red-600'>Sign In</span>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div >
    )
}