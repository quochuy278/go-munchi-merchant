import React from 'react'
import { Box } from '@mui/material'
import styles from './OrderSection.module.css'
import OrderList, { FilterQuery } from '../OrderList/OrderList'
import { useAppSelector } from '../../../store/hooks'
import { selectSession } from '../../../store/slices/session'
import { useGetFilteredOrderQuery } from '../../../store/slices/api'
import FullscreenLoading from '../../Loading/FullscreenLoading'
import OrderTitle from '../OrderTitle/OrderTitle'
import OrderCompleteList from '../OrderCompleteList/OrderCompleteList'
import CenterContainer from '../../Container/CenterContainer'
interface OrderSectionProps {
    status: number[]
    isCompleted: boolean
    span: number
    title: string
    refetch: boolean
}

const OrderSection = ({ status, isCompleted, span, title, refetch }: OrderSectionProps) => {
    const { businessId } = useAppSelector(selectSession)
    const filterData: FilterQuery = {
        publicBusinessId: businessId! as string,
        query: `"status":[${status}]`,
        paramsQuery: [
            'id',
            'business_id',
            'prepared_in',
            'customer_id',
            'status',
            'delivery_type',
            'delivery_datetime',
            'products',
            'summary',
            'customer',
            'created_at',
        ].join(','),
    }
    const { data, isFetching, isLoading, isError, error, refetch: RefetchOrder } = useGetFilteredOrderQuery(filterData)
    if (refetch) {
        RefetchOrder()
        return (
            <Box gridColumn={`span ${span}`} className={styles.section__container}>
                <FullscreenLoading />
            </Box>
        )
    }
    if (isFetching || isLoading) {
        return (
            <Box gridColumn={`span ${span}`} className={styles.section__container}>
                <FullscreenLoading />
            </Box>
        )
    }
    if (error || isError) {
        console.log(error)
        return (
            <Box gridColumn={`span ${span}`} className={styles.section__container}>
                <CenterContainer>Something wrong happened , can't fetch data properly</CenterContainer>
            </Box>
        )
    }

    return (
        <>
            {isCompleted ? (
                <Box gridColumn={`span ${span}`} className={styles.section__container}>
                    <OrderTitle title={title} quantity={data.length} />
                    <OrderCompleteList orders={data} />
                </Box>
            ) : (
                <Box gridColumn={`span ${span}`} className={styles.section__container}>
                    <OrderTitle title={title} quantity={data.length} />
                    <OrderList orders={data} />
                </Box>
            )}
        </>
    )
}

export default OrderSection
