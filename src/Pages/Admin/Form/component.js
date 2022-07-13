import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import InputProduct from '../InputProduct/component';
import { useDispatch } from 'react-redux';
import { addProduct, clearEditProduct } from '../../../Store/Actions/component';

import styles from './index.m.css';

const AdminForm = ({ editElement }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(editElement.title || '');
  const [price, setPrice] = useState(editElement.price || '');
  const [description, setDescription] = useState(editElement.description || '');
  const [category, setCategory] = useState(editElement.category || '');
  const [img, setImg] = useState(editElement.img || '');

  return (
    <div className={styles.form__wrapper}>
      <Formik
        initialValues={{
          title: title,
          price: price,
          description: description,
          category: category,
          img: img,
        }}
        onSubmit={(
          { title, price, description, category, img },
          { resetForm }
        ) => {
          dispatch(
            addProduct({
              ...editElement,
              title,
              price: Number(price),
              description,
              category,
              img,
            })
          );
          dispatch(clearEditProduct(editElement));
          resetForm();
        }}
      >
        <Form>
          <div className="form__inputs">
            <Field
              id="Title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              component={InputProduct}
            />
            <Field
              id="Price"
              name="price"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              component={InputProduct}
            />
            <Field
              id="Description"
              name="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              component={InputProduct}
            />
            <Field
              id="Category"
              name="category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              component={InputProduct}
            />
            <Field
              id="Img"
              name="img"
              type="url"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              component={InputProduct}
            />
          </div>
          <button type="submit">Add Product</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AdminForm;
