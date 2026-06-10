import { useState } from "react";
import { useAddStudentMutation } from "../../services/APIsRequestService";

type Props = {
  open: boolean;
  onClose: () => void;
};

const StudentModal = ({ open, onClose }: Props) => {
  const [names, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sittingLocation, setLocation] = useState("");
  const [gender, setGender] = useState<"Male" | "Female" | "">("");

  const [addStudent, { isLoading }] = useAddStudentMutation();

  if (!open) return null;

  const handleSubmit = async () => {
    if (!names || !email || !gender || !phone || !sittingLocation) return;

    try {
      await addStudent({
        names,
        email,
        phone,
        gender,
        sittingLocation,
      }).unwrap();

      setName("");
      setEmail("");
      setGender("");
      setPhone("");
      setLocation("");

      onClose();
    } catch (error) {
      console.error("Failed to add student:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-[400px] space-y-4 shadow-xl">
        <h2 className="text-xl font-bold text-black dark:text-white">
          Add Student
        </h2>

        <form action="submit" onSubmit={handleSubmit}>
          <input
          value={names}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student name"
          className="w-full p-3 border rounded-lg dark:bg-gray-700"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 border rounded-lg dark:bg-gray-700"
        />

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone number"
          className="w-full p-3 border rounded-lg dark:bg-gray-700"
        />

        <select
          value={gender}
          onChange={(e) =>
            setGender(e.target.value as "Male" | "Female" | "")
          }
          className="w-full p-3 border rounded-lg dark:bg-gray-700"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          value={sittingLocation}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 border rounded-lg dark:bg-gray-700"
        >
          <option value="">Select where they sit</option>
          <option value="[1][1]">[1][1]</option>
          <option value="[1][2]">[1][2]</option>
          <option value="[1][3]">[1][3]</option>
          <option value="[1][4]">[1][4]</option>
        </select>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-400 text-white"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 rounded bg-blue-500 text-white disabled:opacity-50"
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default StudentModal;