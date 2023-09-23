import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import ActionBar from './ActionBar';


const ProductDetail = () => {
    const handleBackPress = () => {
        // Xử lý sự kiện khi nút "Back" được nhấn
        // Thường bạn sẽ điều hướng ngược lại màn hình trước đó
    };

    const handleUserInfoPress = () => {

    }

    const CommentItem = ({ item }) => {
        return (
            <View style={styles.commentItem}>
                <Image source={item.customerAvatar} style={styles.avatar} />
                <View style={styles.commentDetails}>
                    <Text style={styles.customerName}>{item.customerName}</Text>
                    <Text style={styles.customerStarRatings}>{'★'.repeat(item.customerStarRatings)}</Text>
                    <Text style={styles.customerFeedback}>{item.customerFeedback}</Text>
                </View>
            </View>
        );
    };

    // Đầu tiên, tính trung bình đánh giá từ tất cả các đánh giá của khách hàng
    let totalRatings = 0;
    for (const feedback of product.allCustomerFeedback) {
        totalRatings += feedback.customerStarRatings;
    }

    const averageRating = totalRatings / product.allCustomerFeedback.length;

    // Sau đó, tính tổng số lượng phản hồi từ dữ liệu trong allCustomerFeedback
    const feedbackCount = product.allCustomerFeedback.length;

    // Bây giờ, bạn có thể sử dụng averageRating và feedbackCount trong JSX của bạn
    // Thay vì sử dụng product.averageRating và product.feedbackCount


    return (
        <View style={styles.container}>
            <ActionBar title="Product Detail" />
            <View style={styles.customContent}>
                <ScrollView>
                    {/* đây là nơi hiện thị hình ảnh sản phẩm dạng slide */}
                    <Text style={styles.productName}>{product.productName}</Text>
                    <Text style={styles.productPrice}>{product.productPrice}</Text>
                    <View style={styles.separator}></View>
                    <TouchableOpacity onPress={handleUserInfoPress}>
                        <View style={styles.userInfo}>
                            <View style={styles.avatarContainer}>
                                <Image source={product.sellerAvatar} style={styles.avatar} />
                            </View>
                            <View style={styles.userInfoText}>
                                <Text style={styles.userName}>{product.sellerName}</Text>
                                <Text style={styles.verifiedText}>{product.verifiedSeller}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.separator}></View>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionLabel}>Description</Text>
                        <Text style={styles.description}>{product.productDescription}</Text>
                    </View>

                    {/* Phần averageRating và feedbackCount */}
                    <View style={styles.ratingContainer}>
                        <Text style={styles.feedbackCount}>{feedbackCount} Bình Luận</Text>
                        <Text style={styles.averageRating}>{averageRating.toFixed(1)} ☆</Text>
                    </View>

                    {/* <FlatList
                        data={product.allCustomerFeedback}
                        renderItem={({ item }) => <CommentItem item={item} />}
                        keyExtractor={(item, index) => index.toString()}
                    /> */}
{/*-------------------------- Vì FlatList lồng ScrollView sẽ gây ra lỗi và sẽ warning nên phải dùng cách dưới--------------------------- */}
                    {
                        product.allCustomerFeedback.map((item) => <CommentItem key={item.customerID} item={item} />)
                    }
                    {/* data map tới item trỏ tới chỗ view render chọn key để giải nén từng item, dữ liệu item sẽ là item được truyền vào */}

                    

                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    customContent: {
        flex: 1,
        backgroundColor: 'white'
    },
    productName: {
        marginLeft: 15,
        marginTop: 10,
        fontSize: 25,
        fontWeight: '500',
        color: 'black'
    },
    productPrice: {
        marginLeft: 15,
        color: 'red',
        fontSize: 18,
        fontWeight: '500',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    avatarContainer: {
        marginLeft: 10,
        marginRight: 16,
        borderWidth: 1,            // Độ dày của đường viền
        borderColor: 'black',     // Màu của đường viền
        borderRadius: 40,        // Để biến thành hình tròn, độ lệch phải bằng một nửa kích thước
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 40, // Để biến thành hình tròn, độ lệch phải bằng một nửa kích thước
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    verifiedText: {
        color: 'green',
        fontWeight: 'bold',
    },
    separator: {
        marginLeft: 10,
        marginRight: 10,
        height: 1,
        backgroundColor: 'gray', // Màu của đường thẳng
        marginVertical: 10, // Khoảng cách đứng giữa các thành phần
    },
    descriptionContainer: {
        padding: 10,
    },
    descriptionLabel: {
        fontSize: 25,
        color: 'black',
        fontStyle: 'bold'
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: 'black',
        fontStyle: 'italic',
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    feedbackCount: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    averageRating: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    customerFeedbackItem: {
        flexDirection: 'row', // Thiết lập thành hàng ngang
        marginBottom: 10,
        alignItems: 'center', // Căn giữa các phần tử theo chiều dọc
    },
    commentItem: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        // Các kiểu dáng khác của mục bình luận
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        // Các kiểu dáng khác của hình đại diện
    },
    commentDetails: {
        flex: 1,
        marginLeft: 10,
        // Các kiểu dáng khác của chi tiết bình luận
    },
    customerName: {
        fontSize: 16,
        fontWeight: 'bold',
        // Các kiểu dáng khác của tên khách hàng
    },
    customerStarRatings: {
        fontSize: 16,
        // Các kiểu dáng khác của đánh giá sao
    },
    customerFeedback: {
        fontSize: 14,
        // Các kiểu dáng khác của phản hồi
    },
});

export default ProductDetail;

const product =
{
    "sellerAvatar": require('../images/91042496_p2.jpg'),
    "sellerName": "Tiến Anh",
    "verifiedSeller": "Verified",
    "productName": "Máy Ảnh DSLR Canon EOS 90D",
    "productPrice": "200.000",
    "productImages": require('../images/91042496_p2.jpg'),
    "productDescription": "Máy ảnh DSLR Canon EOS 90D là một chiếc máy ảnh chất lượng cao, được thiết kế để cung cấp hiệu suất ấn tượng cho cả nhiếp ảnh và quay phim. Với khả năng chụp ảnh chất lượng cao và tính năng quay video 4K, nó là một công cụ hoàn hảo cho những người đam mê nhiếp ảnh và quay phim.",
    "customerAvatar": require('../images/91042496_p2.jpg'),
    "customerFeedback": "Good product!",
    "allCustomerFeedback": [
        {
            customerID:4241,
            customerAvatar: require('../images/91042496_p2.jpg'),
            customerName: 'Customer 1',
            customerFeedback: 'Great product! I love it.',
            customerStarRatings: 5,
        },
        {
            customerID:1231,
            customerAvatar: require('../images/91042496_p2.jpg'),
            customerName: 'Customer 2',
            customerFeedback: 'Good quality, fast shipping.',
            customerStarRatings: 4,
        },
        {
            customerID:35345,
            customerAvatar: require('../images/91042496_p2.jpg'),
            customerName: 'Customer 3',
            customerFeedback: 'Average product, could be better.',
            customerStarRatings: 3,
        },
        {
            customerID:984306,
            customerAvatar: require('../images/91042496_p2.jpg'),
            customerName: 'Customer 4',
            customerFeedback: 'Not satisfied with the product.',
            customerStarRatings: 2,
        },
        {
            customerID:11930,
            customerAvatar: require('../images/91042496_p2.jpg'),
            customerName: 'Customer 5',
            customerFeedback: 'Terrible quality, do not buy.',
            customerStarRatings: 1,
        },
    ]
}

