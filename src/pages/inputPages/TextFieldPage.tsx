import TextField from '../../components/TextField';
import DisplaySection from '../../layouts/DisplaySection';

const DISPLAY_DATA = {
  title: 'Input/Text field',
  description: '사용자가 직접 타이핑해  내용을 입력할 수 있는 컴포넌트입니다.',
};

export default function TextFieldPage(): JSX.Element {
  function handleInputChange() {}

  return (
    <DisplaySection {...DISPLAY_DATA}>
      <table>
        <colgroup>
          <col width="160px" />
        </colgroup>
        <thead>
          <tr>
            <th>State/Type</th>
            <th>Default</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Enabled-Unfilled</td>
            <td>
              <TextField onChange={handleInputChange} />
            </td>
            <td>
              <TextField type="password" onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>Enabled-Filled</td>
            <td>
              <TextField initialValue="텍스트" onChange={handleInputChange} />
            </td>
            <td>
              <TextField type="password" initialValue="텍스트" onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>Enabled-Hover</td>
            <td>
              <TextField onChange={handleInputChange} />
            </td>
            <td>
              <TextField type="password" onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>Focused</td>
            <td>
              <TextField onChange={handleInputChange} />
            </td>
            <td>
              <TextField type="password" onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>Error</td>
            <td>
              <TextField initialValue="텍스트" onChange={handleInputChange} />
            </td>
            <td>
              <TextField type="password" initialValue="텍스트" onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>Disabled</td>
            <td>
              <TextField onChange={handleInputChange} />
            </td>
            <td>
              <TextField type="password" readonly onChange={handleInputChange} />
            </td>
          </tr>
        </tbody>
      </table>
    </DisplaySection>
  );
}
