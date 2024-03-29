import React, { useState } from 'react';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

// Style
import styles from './App.module.css';

// Interface
import { ITask } from './interfaces/Task';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  } 

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  }

  const updateTask = (taskToUpdate: ITask): void => {
    const updatedItems = taskList.map((task) => {
      return task.id === taskToUpdate.id ? taskToUpdate : task;
    });

    setTaskList(updatedItems);

    hideOrShowModal(false);
  }

  return (
    <div>
      <Modal children={ 
        <TaskForm 
          btnText="Editar" 
          taskList={taskList} 
          task={taskToUpdate}
          handleUpdate={updateTask}
        />
      }/>
      <Header />
      <main className={styles.main}>
        <div>Conteudo..</div>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm 
            btnText='Cadastrar' 
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
