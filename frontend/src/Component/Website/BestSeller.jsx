import { useEffect, useState } from "react";
import { getCategory } from "../../Api/Category";
import { GetData, GetCategoryProduct } from "../../Api/Product";
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../redux/Reducers/CartReducer"

const BestSeller = () => {
    const [Category, setCategory] = useState();
    const [active, setActive] = useState("All");
    const [loader, setLoader] = useState(false);
    const [product, setProduct] = useState([]);
    const [productImagePath, setProductImagePath] = useState("");
    const {data} = useSelector((state) => state.cart);
    console.log(data)



    useEffect(() => {
        getCategory()
            .then((success) => {
                if (success.data.status === 1) {
                    setCategory(success.data.category, success.data.path);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const categoryChangeHandler = (categoryId) => {
        setActive(categoryId);
        setLoader(true);
    };

    useEffect(() => {
        if (active === "All") {

            GetData()
                .then((success) => {
                    if (success.data.status === 1) {
                        setProduct(success.data.product);
                        setLoader(false);
                    }
                    setProductImagePath(success.data.path);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {

            GetCategoryProduct(active)
                .then((success) => {
                    console.log(success);
                    if (success.data.status === 1) {
                        setProduct(success.data.product);
                        setLoader(false);
                    }
                    setProductImagePath(success.data.path);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [active]);

    return (
        <>
            <div className="row">
                <div className="best-seller">best seller</div>
                <div className="menu-seller cursor-pointer">
                    <div
                        className={`${active === "All" ? "active" : ""}`}
                        onClick={() => categoryChangeHandler("All")}
                    >
                        All
                    </div>
                    {Category?.map((d, i) => {
                        return (
                            <div
                                className={active === d._id ? "active" : ""}
                                onClick={() => categoryChangeHandler(d._id)}
                                key={i}

                            >
                                {d.name}
                            </div>
                        );
                    })}
                </div>
            </div>
            {loader === true ? (
                <div className="text-center text-4xl">Loading....</div>
            ) : (
                <div className="row">
                    {product?.map((data, i) => {
                        return <Box key={i} {...data} path={productImagePath} />;
                    })}
                </div>
            )}
        </>
    );
};

const Box = (props) => {
    const dispatch = useDispatch()
    return (
        <div className="box shadow-lg border-2 ">
            <div className="hot">Hot</div>
            <div className="product-img">
                <img src={props.path + props.image} alt="" />
            </div>
            <div className="hr" />
            <div className="product-content ">
                <h3>{props.name}</h3>
                <div className="rate">
                    <i
                        className="fa fa-star"
                        style={{ color: "#ffc600" }}
                        aria-hidden="true"
                    />
                    <i
                        className="fa fa-star"
                        style={{ color: "#ffc600" }}
                        aria-hidden="true"
                    />
                    <i
                        className="fa fa-star"
                        style={{ color: "#ffc600" }}
                        aria-hidden="true"
                    />
                    <i
                        className="fa fa-star"
                        style={{ color: "#ffc600" }}
                        aria-hidden="true"
                    />
                    <i
                        className="fa fa-star"
                        style={{ color: "#c1c8ce" }}
                        aria-hidden="true"
                    />
                </div>
                <div>
                    <span style={{ color: "#ff4858" }}>{props.discounted_price}</span>
                    <span style={{ color: "#c1c8ce", textDecoration: "line-through" }}>
                        {props.original_price}
                    </span>
                </div>
                <div  >
                    <button onClick={() => dispatch(addToCart(props))} className=" px-4 py-1 bg-sky-500 text-white mt-1 rounded ">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default BestSeller;
