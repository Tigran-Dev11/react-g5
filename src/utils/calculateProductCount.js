


export  const calculateProductCount = products => {
    if(products && products.length === 0){
        return 0;
    }

    return products.reduce((acc, item) => acc + item.quantity, 0);
} 