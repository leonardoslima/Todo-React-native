import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import Circle from "../../assets/Icons/circle/circle.png";
import CircleVerify from "../../assets/Icons/circleverify/circleverify.png";
import Trash from "../../assets/Icons/trash/trash.png";
import Note from "../../assets/Icons/note/note.png";

import { styles } from "./styles";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TaskListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export function Tasks({ tasks, toggleTaskDone, removeTask }: TaskListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => toggleTaskDone(item.id)}
          >
            <Image source={item.done ? CircleVerify : Circle} />
          </TouchableOpacity>

          <Text style={item.done ? styles.taskTextDone : styles.taskText}>
            {item.title}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => removeTask(item.id)}
          >
            <Image source={Trash} />
          </TouchableOpacity>
        </View>
      )}

      ListEmptyComponent={() => (

        <View style={styles.listEmpty}>
          <Image source={Note} />
          <Text style={styles.listEmptyText}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.listEmptyText2}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>

      )}
    />
  );
}
