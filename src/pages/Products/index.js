import React, { Component } from 'react';
import { Drawer, Button } from 'antd';
import { Layout, List, Card } from 'antd';
import { FaCartPlus } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { AddToCartTooltip, CategoryList, CategoryListItem, CategoryListItemMeta, ItemBadgeRibbon, PageContentLayout, PageHeaderLayout, ProductCard, ProductCategoriesSideMenu, ProductCollectionWrapper, ProductImage, ProductList, ProductListItem, ProductSearchBox } from './ProductsPageElements';
import { SearchOutlined, BarcodeOutlined, ShoppingCartOutlined, LeftOutlined } from '@ant-design/icons';

export default class Products extends Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            product: {
                title: 'Default',
                description: ''
            }
        };

        this.category = [
            {
                name: "Computers"
            },
            {
                name: "Solar Energy"
            },
            {
                name: "Laptops"
            },
            {
                name: "Desktops"
            },
            {
                name: "Printers"
            },
            {
                name: "Batteries"
            },
            {
                name: "Computer Accessories"
            },
            {
                name: "Servers"
            },
            {
                name: "Softwares"
            },
            {
                name: "Cyber Security Solutions"
            }
        ];

        this.data = [
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/I/104208_1550737843.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/S/148116_1616175363.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Y/U/148116_1616165595.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/C/188813_1621631418.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/G/53793_1534103934.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Y/T/175661_1594894080.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/A/176767_1619207145.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/O/118566_1604047694.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/Z/76560_1613489793.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/A/76560_1613492252.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Y/T/118566_1607413429.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/J/120522_1596528850.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/R/59340_1613123061.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/P/118566_1618904348.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/B/_1617780575.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/V/_1617781081.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/N/148116_1596541390.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/I/52688_1620837927.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/A/104104_1541167578.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/F/148116_1596542742.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/J/53250_1610456831.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/O/118566_1604051366.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/T/118566_1603957477.jpg'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6',
                image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/P/55070_1622202407.jpg'
            }
        ];

        // Bind the properties of showDrawer
        this.showDrawer = this.showDrawer.bind(this);

        // Bind the properties of onClose
        this.onClose = this.onClose.bind(this);
    }

    // Triggers when show drawer is invoked
    showDrawer(productItem) {

        // Set the single product item
        this.setState({
            product: productItem
        });

        // Show the drawer
        this.setDrawerVisibility(true);
    }

    // Triggers when close drawer is invoked
    onClose() {
        // Close the drawer
        this.setDrawerVisibility(false);
    }

    // Set the drawer's visibility based 
    // on the passed parameter
    setDrawerVisibility(flag) {
        this.setState({
            visible: flag
        });
    }

    // Renders the view content for this page
    render() {

        return (
            <>
                <PageContentLayout>

                    <PageHeaderLayout>
                        <ProductSearchBox placeholder="Filter Products" bordered={false} allowClear size="large" prefix={ <SearchOutlined style={{ fontSize: '20px' }} /> } suffix={ <BarcodeOutlined style={{ fontSize: '28px' }} /> } className='product-search-box-wrapper' id='psb' />
                    </PageHeaderLayout>

                    <ProductCollectionWrapper>
                        <ProductList
                            grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 3, xxl: 4, }}
                            dataSource={this.data}
                            renderItem={item => (
                                <ProductListItem onClick={ () => this.showDrawer(item) }>
                                    {/* <ItemBadgeRibbon text='30% Off' color='#ff3b3b'> */}
                                        <ProductCard 
                                            cover={<ProductImage alt={item.title} src={item.image} />}
                                            actions={[
                                                // <h3 style={{ textAlign: 'left' }}><strong>Add to Cart</strong></h3>
                                                <AddToCartTooltip title='Add to Cart'>
                                                    <MdAddShoppingCart style={{ fontSize: '28px' }} />
                                                </AddToCartTooltip>
                                              ]}
                                        >
                                            <Card.Meta title={item.title} description={ item.description } />
                                        </ProductCard>
                                    {/* </ItemBadgeRibbon> */}
                                </ProductListItem>
                            )}
                        />
                    </ProductCollectionWrapper>

                    <ProductCategoriesSideMenu>
                        <CategoryList
                            itemLayout="horizontal"
                            dataSource={this.category}
                            renderItem={item => (
                                <CategoryListItem>
                                    <CategoryListItemMeta
                                        title={item.name}
                                    />
                                    <LeftOutlined />
                                </CategoryListItem>
                            )}
                        />
                    </ProductCategoriesSideMenu>
                </PageContentLayout>

                <Drawer
                    title={this.state.product.title}
                    placement="right"
                    width='calc(100vw - 100px)'
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>{this.state.product.description}</p>
                    {/* <p>Some contents...</p>
                    <p>Some contents...</p> */}
                </Drawer>
            </>
        );
    }
}
