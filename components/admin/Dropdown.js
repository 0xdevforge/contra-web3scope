"use client";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedItem: this.props.options ? this.props.options[0] : null,
    };
  }

  toggleOpen = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  selectItem = (item) => {
    this.setState({
      selectedItem: item,
      isOpen: false,
    });
  };

  render() {
    const { label, options = [] } = this.props;
    const { isOpen, selectedItem } = this.state;

    return (
      <div className="flex flex-col">
        <div className="w-full border-gray-300 focus:border-0 outline-none focus:ring-0 border rounded-lg px-4 py-1 text-sm focus:outline-none ring-0 h-full items-center flex flex-col justify-center">
          <div className="w-full mb-2">
            <label className="text-left text-gray-700 text-xs">{label}</label>
          </div>
          <div
            className="text-gray-700 py-2 justify-between flex rounded leading-tight cursor-pointer text-start w-full"
            onClick={this.toggleOpen}
          >
            {selectedItem}
            <span>
              <FaChevronDown />
            </span>
          </div>
        </div>
        {isOpen && (
          <div className="w-full">
            <div className="bg-white shadow rounded mt-1">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => this.selectItem(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

function App() {
  return (
    <div className="w-full">
      <Dropdown
        label="Hourly Rate"
        options={["-Select-", "$25 - $50/hr", "$50 - $75/hr", "$75 - $100/hr"]}
      />
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          <i className="fas fa-info-circle"></i> Your time zone won&apos;t
          exclude you from jobs; it helps us find you better-matched jobs.
        </p>
      </div>
      <div className="flex w-full items-center gap-2 mb-6">
        <div className="w-2/3">
          <Dropdown
            label="Time Zone"
            options={[
              "(GMT-88) Pacific Standard Time (PST)",
              "(GMT-88) Pacific Standard Time (PST)",
              "(GMT-88) Pacific Standard Time (PST)",
              "(GMT-88) Pacific Standard Time (PST)",
              "(GMT-88) Pacific Standard Time (PST)",
            ]}
          />
        </div>

        <div className="w-1/3 ">
          <Dropdown
            label="Profieiency"
            options={[
              "Pacific 1",
              "Pacific 2",
              "Pacific 3",
              "Pacific 4",
              "Pacific 5",
            ]}
          />
        </div>
      </div>
      <div className="mb-6">
        <p className="text-gray-600 text-xs italic">
          💡 Your time zone wont exclude you from jobs; it helps us find you
          better-matched jobs.
        </p>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="languages"
        >
          Languages
        </label>
        <div className="flex -mx-2">
          <div className="w-1/2 px-2 mb-4">
            <Dropdown
              label="Language"
              options={["Select", "English", "Spanish", "French"]}
            />
          </div>
          <div className="w-1/2 px-2 mb-4">
            <Dropdown
              label="Proficiency"
              options={[
                "Select",
                "Beginner",
                "Intermediate",
                "Advanced",
                "Native",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
