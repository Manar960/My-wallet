import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import CategoriesService, { Category } from './category-api';
import { ToastContainer, toast } from 'react-toastify';
import { BiSolidMessageSquareAdd } from 'react-icons/bi';
import { Dropdown } from 'primereact/dropdown';
import icon from '../flaticons/001-school-bus.png';
import { icons } from './FlatIcon';
interface CategoryFormProps {
  category?: Category;
  onSaveButtonClicked: (category: Category) => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ category, onSaveButtonClicked }) => {
  const initialValues: Category = category || { id: 0, name: '', icon: '' };

  const CategorySchema = Yup.object().shape({
    name: Yup.string().required('Category name is required')
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: CategorySchema,
    onSubmit: async (values) => {
      try {
        if (category) {
          await CategoriesService.updateCategory(values);
          toast.success('Category updated successfully');
        } else {
          await CategoriesService.addCategory(values);
          toast.success('Category added successfully');
        }
        onSaveButtonClicked(values);
      } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred');
      }
    }
  });

  const isSubmitDisabled = !formik.dirty || !formik.isValid;
  

  return (
    <div className="p-fluid tran d-inline-flex container-fluid">
      <form onSubmit={formik.handleSubmit} className="transaction card">
        <div className="avatar d-flex justify-content-center align-items-center">
          <BiSolidMessageSquareAdd style={{ color: 'white', width: '50px', height: '50px' }} />
        </div>
        <div className="main">
          <div className="felid d-flex flex-column">
            <InputText
              type="text"
              id="name"
              name="name"
              placeholder="Category Name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <span className="errorMsg">
              {formik.errors.name && <small>{formik.errors.name}</small>}
            </span>
          </div>
          <div className="felid d-flex flex-column">
            <Dropdown
              id="categoryIcon"
              name="categoryIcon"
              placeholder="Category Icon"
              value={formik.values.icon}
              options={icons.map((icon) => ({
                label: (
                  <span className="d-flex align-items-center">
                    <span>{icon.name}</span>
                  </span>
                ),
                value: icon.path
              }))}
              onChange={(e) => formik.setFieldValue('icon', e.value)}
              onBlur={formik.handleBlur}
              style={{
                height: '47px',
                borderRadius: '15px',
                alignItems: 'center',
                backgroundColor: '#d2d9f4',
                paddingLeft: '10px'
              }}
            />
          </div>
        </div>

        <div className="p-field">
          <Button
            type="submit"
            disabled={isSubmitDisabled}
            label={category ? 'Update Category' : 'Add Category'}
            className="button d-inline-flex align-items-center justify-content-center mt-2 mb-4"
            style={{
              background: 'linear-gradient(90deg, #937bff, #d7a0f7)',
              color: 'white',
              boxShadow: '0 0 20px #d7a0f7'
            }}
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CategoryForm;
