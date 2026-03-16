import axios from "axios";
import { useState } from "react";

const AddProductsComponent = () => {

    let [product_name, setProductName] = useState("");
    let [product_description, setProductDescription] = useState("");
    let [product_cost, setProductCost] = useState("");
    let [product_category, setProductCartegory] = useState("");
    let [product_image, setProductImage] = useState("");

    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("")
        setSuccess("")
        setLoading("")


        try {
            const data = new FormData()
            data.append("product_name", product_name);
            data.append("product_description", product_description);
            data.append("product_cost", product_cost);
            data.append("product_category", product_category);
            data.append("product_image", product_image);

            const response = await axios.post("https://kmuturi.alwaysdata.net/api/add_product", data);
            console.log(response)

            if (response.status === 200) {
                setLoading("");
                setSuccess(response.data.message);

                setProductName("");
                setProductDescription("");
                setProductCost("");
                setProductCartegory("");
                setProductImage("");
            }

        } catch (error) {
            setError(error.message)
            setLoading("")
        }

    }

    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>Add Product</h2>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-success">{success}</h5>

                <form onSubmit={handleSubmit}>
                    <input type="text"
                        className="form-control"
                        placeholder="product name"
                        required
                        onChange={(e) => { setProductName(e.target.value) }}
                        value={product_name}
                    /><br />

                    <textarea
                        className="form-control"
                        placeholder="product description"
                        rows="7"
                        required
                        onChange={(e) => { setProductDescription(e.target.value) }}
                        value={product_description}
                    ></textarea>
                    <br />


                    <input type="number"
                        className="form-control"
                        required
                        placeholder="Enter product cost"
                        onChange={(e) => { setProductCost(e.target.value) }}
                        value={product_cost}
                    />
                    <br />


                    <label htmlFor="" className="form-label">
                        Product Cartegory
                    </label>
                    <select className="form-select"
                        required
                        onChange={(e) => { setProductCartegory(e.target.value) }}
                    >

                        <option value="">Select Cartegory</option>
                        <option value="television">tv</option>
                        <option value="phones">phones</option>
                        <option value="laptops">laptops</option>
                        <option value="accessories">accessories</option>
                    </select>
                    <br />


                    <label htmlFor="" className="form-label">
                        product image
                    </label>
                    <input type="file" className="form-control"
                        required
                        placeholder="Enter image"
                        // multiple  selecting multiple images
                        accept="image/*"
                        // accept="image/pdf"  selecting pdf only
                        onChange={(e) => { setProductImage(e.target.files[0]) }}
                    />
                    <br />

                    <button className="btn btn-dark">Add products</button>

                </form>
            </div>
        </div>
    );
}

export default AddProductsComponent;