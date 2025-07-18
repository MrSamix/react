import { useState } from 'react';
import Comment from './Comment';
import './Task1.css'
import { useForm } from 'react-hook-form';

function Task1() {
    const {register, handleSubmit} = useForm();
    const [comments, setComments] = useState([]);

    const onSubmit = (d) => {
        console.log(d);
        setComments([...comments, d]);
        document.querySelector('form').reset();
    }


  return (
    <div>
        {comments.map((c, i) => <Comment key={i} {...c} />)}
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username:
                <input type="text" {...register("username")} required/>
            </label>
            <label>Email:
                <input type="email" {...register("email")} required/>
            </label>
            <label>Gender:
                <select {...register("gender")} id="gender">
                    <option value="man">Man</option>
                    <option value="woman">Woman</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <label>Age:
                <input type="number" {...register("age")} min={1} required/>
            </label>
            <label>Password:
                <input type="password" {...register("password")} min={8} required/>
            </label>
            <label>Photo URL:
                <input type="text" {...register("photoUrl")} required/>
            </label>
            <label>Description:
                <textarea {...register("description")} rows="4" cols="50" required></textarea>
            </label>
            <label>Tags:
                <input type="text" {...register("tags")} required/>
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Task1