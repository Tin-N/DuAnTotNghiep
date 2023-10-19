import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Pagination = ({ totalPages, currentPage, onPageChange, maxVisiblePages }) => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    // Hiển thị tối đa 'maxVisiblePages' trang

    let startIndex = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 0);
    let endIndex = Math.min(currentPage + Math.round(maxVisiblePages / 2), totalPages);
    // console.log(startIndex, endIndex);
    let visiblePages = pages.slice(
        startIndex,
        endIndex);


    if ((totalPages - currentPage) < 2) {
        visiblePages = pages.slice(
            startIndex-1,
            endIndex);
    }


    if (visiblePages[0] > 1) {
        // Thêm "..." nếu trang đầu không phải là trang 1
        visiblePages = ['<', ...visiblePages];
    }

    if (visiblePages[visiblePages.length - 1] < totalPages) {
        // Thêm "..." nếu trang cuối không phải là trang cuối cùng
        visiblePages = [...visiblePages, '>'];
    }

    return (
        <View style={styles.pagination}>
            {visiblePages.map((page, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        if (page == '<' ) 
                        {
                            onPageChange(currentPage-1);
                            return;

                        }
                        if (page == '>' )
                        {
                            onPageChange(currentPage+1);
                            return;
                        }

                        onPageChange(page);
                    }}
                    style={[
                        styles.pageNumber,
                        page === currentPage ? styles.activePage : null,
                        page === '...' ? styles.dots : null,
                    ]}
                >
                    <Text style={[styles.pageText, page === '...' ? styles.dotsText : null, page === currentPage ? styles.activePage : null,]}>
                        {page}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:10,
    },
    pageNumber: {
        elevation: 6,
        padding: 10,
        paddingHorizontal: 15,
        margin: 4,
        borderRadius:30,
        backgroundColor: 'white',
        color: 'black'

    },
    activePage: {
        backgroundColor: '#3669C9',
        color: 'white',
    },
    dots: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    dotsText: {
        color: 'gray',
    },
    pageText: {
        fontSize: 15,
        color: 'black',
    },
});

export default Pagination;