import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react';
import styles from './TaskForm.module.css';
import { ITask } from '../interfaces/Task';

interface Props {
    btnText: string
}

const TaskForm = ({ btnText }: Props) => {
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<number>(0);

    const addTaskHandler = () => {}
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case "title":
                setTitle(e.target.value);
                break;
            case "difficulty":
                setDifficulty(parseInt(e.target.value));
                break;
        }
    }

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Titulo:</label>
                <input type="text" name="title" placeholder="Titulo da tarefa" className={styles.form_input} onChange={handleChange}/>
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade:</label>
                <input type="text" name="difficulty" placeholder="Dificuldade da tarefa" className={styles.form_input} onChange={handleChange}/>
            </div>
            <input type="submit" value={btnText} className={styles.form_input}/>
        </form>
    );
}

export default TaskForm; 