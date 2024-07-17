import React from "react";
import { MdBookmarkAdded } from "react-icons/md";
import { FiDelete } from "react-icons/fi";
import { toast } from "react-toastify";
import { ITask } from "../../Interfaces";
import "./styles.css";

interface TaskProps {
  task: ITask;
  deleteTask(deleteTaskById: number): void;
}

function TodoTask({ task, deleteTask }: TaskProps) {
  const confirmDelete = (taskId: number) => {
    toast.warn(
      ({ closeToast }) => (
        <div className="toast-alert">
          <p>Tem certeza que deseja deletar esta Task?</p>
          <button
            className="btn-confirm"
            onClick={() => {
              deleteTask(taskId);
              if (closeToast) {
                closeToast();
              }
            }}
          >
            Confirmar
          </button>
          <button className="btn-cancel" onClick={closeToast}>
            Cancelar
          </button>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: false,
      }
    );
  };

  return (
    <div className="list-card">
      <div className="card">
        <div>
          <p>
            {" "}
            <MdBookmarkAdded
              className="input-btn"
              size={25}
              color="#4e92b9"
            />{" "}
            {task.nameTask}
          </p>
        </div>
        <div className="line2">
          <span
            className="btn-card"
            onClick={() => confirmDelete(task.id)}
            title="Deletar Task"
          >
            <FiDelete color="#eb5f5f" size={22} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TodoTask;
