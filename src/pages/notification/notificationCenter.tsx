import React, { useState } from 'react';
import NotificationCard from '../../components/notificationCard';
import { DescType, RoutePatternInterface } from './notifyInterface';

interface NotificationListType {
    notificationType: string;
    notificationStatus: string;
    timeStamp: string;
    lastStatus: string;
    description?: DescType;
    relatedTo: string;
    routePattern?: RoutePatternInterface[]
}

const NotificationCenter = () => {

    const [isAccordianOpen, setIsAccordianOpen] = useState<boolean>(false)
    const [isAccordianOpenIndex, setIsAccordianIndex] = useState<number | null>(null)
    const [notificationLists, setNotificationList] = useState<NotificationListType[]>([
        {
            notificationType: 'routeDesc',
            notificationStatus: 'arrived',
            timeStamp: '03:25 PM',
            lastStatus: 'Arrived at home',
            relatedTo: 'busRoute',
            description: {
                title: 'Adam Ahmed Fathy Mohamed',
                message: 'Arrived at home'
            },
            routePattern: [
                {
                    title: 'Boarded the bus',
                    timeStamp: '07:16 AM',
                    status: 'boarded',
                },
                {
                    title: 'Arrived at school',
                    timeStamp: '08:18 AM',
                    status: 'arrived',
                },
                {
                    title: 'Boarded the bus',
                    timeStamp: '02:10 PM',
                    status: 'boarded'
                },
                {
                    title: 'Arrived at home',
                    timeStamp: '03:25 PM',
                    status: 'arrived'
                },
            ]
        },
        {
            notificationType: 'routeDesc',
            notificationStatus: 'notBoarded',
            timeStamp: '02:10 PM',
            lastStatus:  `Hasn't boarded`,
            relatedTo: 'busRoute',
            description: {
                title: `Danielle Fathy Mohamed`,
                message: `Hasn't boarded`
            },
            routePattern: [
                {
                    title: 'Boarded the bus',
                    timeStamp: '07:16 AM',
                    status: 'boarded',
                },
                {
                    title: 'Arrived at school',
                    timeStamp: '08:18 AM',
                    status: 'arrived',
                },
                {
                    title: `Hasn't boarded`,
                    timeStamp: '02:10 PM',
                    status: 'notBoarded'
                },
            ]
        },
        {
            notificationType: 'addressChange',
            notificationStatus: 'pending',
            timeStamp: '04:16 PM',
            lastStatus: 'Pending from school',
            relatedTo: 'serviceSupport',
            description: {
                title: 'Adam’s drop off address',
                message: 'Pending from school'
            }
        },
        {
            notificationType: 'complain',
            notificationStatus: 'pending',
            relatedTo: 'complain',
            timeStamp: '04:45 PM',
            lastStatus: 'Pending',
            description: {
                title: 'Complaint (#102-18989412162)',
                message: 'Pending'
            }
        },
        {
            notificationType: 'addressRejected',
            notificationStatus: 'rejected',
            relatedTo: 'serviceSupport',
            timeStamp: '04:45 PM',
            lastStatus: 'rejected',
            description: {
                title: 'Danielle pick-up address',
                message: 'Rejected'
            }
        }
    ])

    const handleSelectedRow = (_t: any) => {
        setIsAccordianIndex(_t)
    }

    return(
        <div className='m-5'>
            <div className='flex justify-center text-center items-center'>
                <p className='h-7 w-20 bg-mainGray border border-mainGray rounded-3xl flex justify-center items-center font-sf-pro-rounded font-medium text-xs leading-18 tracking-0p text-center text-mainBlueTint'>Today</p>
            </div>
            {notificationLists.map((item: NotificationListType, index: number) => (
                <NotificationCard
                    iconType={item.notificationType}
                    notificationStatus={item.notificationStatus}
                    timeStamp={item.timeStamp}
                    lastStatus={item.lastStatus}
                    description={item.description}
                    mainTitle={item?.description?.title}
                    mainDesc={item?.description?.message}
                    relatedTo={item.relatedTo}
                    isAccordianOpen={isAccordianOpen}
                    setIsAccordian={setIsAccordianOpen}
                    setIsAccordianIndex={handleSelectedRow}
                    id={index}
                    isAccordianOpenIndex={isAccordianOpenIndex}
                    routePattern={item.routePattern}
                />
            ))}
        </div>
    )
}

export default NotificationCenter;