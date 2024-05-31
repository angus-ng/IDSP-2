const mapIcon = `
    <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9.08047C1 4.60414 4.58494 1 9 1C13.4151 1 17 4.60414 17 9.08047C17 11.153 16.0473 13.6805 14.6813 16.2003C13.331 18.691 11.6479 21.0473 10.3344 22.7438C9.64025 23.6404 8.35975 23.6404 7.66563 22.7438C6.35215 21.0473 4.669 18.691 3.3187 16.2003C1.95265 13.6805 1 11.153 1 9.08047ZM4.78571 9.08047C4.78571 11.4145 6.66506 13.3235 9 13.3235C11.3349 13.3235 13.2143 11.4145 13.2143 9.08047C13.2143 6.74645 11.3349 4.83745 9 4.83745C6.66506 4.83745 4.78571 6.74645 4.78571 9.08047Z" stroke="#0E0E0E" stroke-width="2"/>
    </svg>`;

const backIcon = `
    <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.4203 8.13983H1M1 8.13983L7.38827 1M1 8.13983L7.38827 15.2797" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

const closeIcon = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.533501 0.533501C0.702385 0.364377 0.902955 0.230206 1.12374 0.138663C1.34452 0.0471195 1.58118 0 1.82019 0C2.0592 0 2.29586 0.0471195 2.51664 0.138663C2.73743 0.230206 2.938 0.364377 3.10688 0.533501L9.71027 7.13446L16.3137 0.533501C16.4826 0.364531 16.6832 0.230496 16.904 0.13905C17.1248 0.0476037 17.3614 0.000537143 17.6003 0.000537138C17.8393 0.000537133 18.0759 0.0476037 18.2967 0.13905C18.5175 0.230496 18.7181 0.364531 18.887 0.533501C19.056 0.702472 19.19 0.903069 19.2815 1.12384C19.3729 1.34461 19.42 1.58123 19.42 1.82019C19.42 2.05915 19.3729 2.29577 19.2815 2.51654C19.19 2.73731 19.056 2.93791 18.887 3.10688L12.2861 9.71027L18.887 16.3137C19.2283 16.6549 19.42 17.1177 19.42 17.6003C19.42 18.0829 19.2283 18.5458 18.887 18.887C18.5458 19.2283 18.0829 19.42 17.6003 19.42C17.1177 19.42 16.6549 19.2283 16.3137 18.887L9.71027 12.2861L3.10688 18.887C2.76563 19.2283 2.30279 19.42 1.82019 19.42C1.33759 19.42 0.874753 19.2283 0.533501 18.887C0.19225 18.5458 0.000537138 18.0829 0.000537138 17.6003C0.000537138 17.1177 0.19225 16.6549 0.533501 16.3137L7.13446 9.71027L0.533501 3.10688C0.364377 2.938 0.230206 2.73743 0.138663 2.51664C0.0471195 2.29586 0 2.0592 0 1.82019C0 1.58118 0.0471195 1.34452 0.138663 1.12374C0.230206 0.902955 0.364377 0.702385 0.533501 0.533501Z" fill="#0E0E0E"/>
    </svg>`;

const deleteIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 3.55357V4.57143H1.0625C0.780707 4.57143 0.510456 4.67867 0.311199 4.86955C0.111942 5.06044 0 5.31933 0 5.58929C0 5.85924 0.111942 6.11813 0.311199 6.30902C0.510456 6.4999 0.780707 6.60714 1.0625 6.60714H1.4875L2.64208 17.6679C2.69475 18.1699 2.94015 18.6353 3.33069 18.9738C3.72122 19.3123 4.22907 19.4998 4.75575 19.5H12.2442C12.7709 19.4998 13.2788 19.3123 13.6693 18.9738C14.0599 18.6353 14.3052 18.1699 14.3579 17.6679L15.5125 6.60714H15.9375C16.2193 6.60714 16.4895 6.4999 16.6888 6.30902C16.8881 6.11813 17 5.85924 17 5.58929C17 5.31933 16.8881 5.06044 16.6888 4.86955C16.4895 4.67867 16.2193 4.57143 15.9375 4.57143H12.75V3.55357C12.75 2.74371 12.4142 1.96703 11.8164 1.39437C11.2186 0.821715 10.4079 0.5 9.5625 0.5H7.4375C6.59212 0.5 5.78137 0.821715 5.1836 1.39437C4.58582 1.96703 4.25 2.74371 4.25 3.55357ZM7.4375 2.53571C7.15571 2.53571 6.88546 2.64295 6.6862 2.83384C6.48694 3.02472 6.375 3.28362 6.375 3.55357V4.57143H10.625V3.55357C10.625 3.28362 10.5131 3.02472 10.3138 2.83384C10.1145 2.64295 9.84429 2.53571 9.5625 2.53571H7.4375ZM5.7375 7.28571C5.87707 7.27895 6.01666 7.29864 6.14827 7.34364C6.27989 7.38864 6.40095 7.45807 6.50451 7.54795C6.60808 7.63783 6.69212 7.74641 6.75182 7.86745C6.81151 7.9885 6.8457 8.11964 6.85242 8.25336L7.242 15.7176C7.25239 15.9851 7.15236 16.2458 6.96357 16.4432C6.77479 16.6405 6.51244 16.7587 6.23336 16.7721C5.95428 16.7855 5.68093 16.693 5.47251 16.5147C5.2641 16.3364 5.13739 16.0866 5.11983 15.8194L4.73025 8.35514C4.723 8.22154 4.7433 8.08789 4.79001 7.96181C4.83672 7.83574 4.90891 7.71973 5.00246 7.6204C5.09601 7.52108 5.20908 7.44039 5.3352 7.38297C5.46133 7.32554 5.59803 7.29249 5.7375 7.28571ZM11.2625 7.28571C11.402 7.29232 11.5387 7.3252 11.6649 7.38246C11.7911 7.43973 11.9043 7.52026 11.9979 7.61946C12.0916 7.71866 12.164 7.83457 12.2108 7.96057C12.2577 8.08657 12.2782 8.22019 12.2712 8.35379L11.8816 15.8181C11.864 16.0852 11.7373 16.335 11.5289 16.5133C11.3205 16.6916 11.0471 16.7841 10.7681 16.7707C10.489 16.7573 10.2266 16.6392 10.0378 16.4418C9.84906 16.2444 9.74903 15.9838 9.75942 15.7163L10.149 8.252C10.1633 7.98266 10.2886 7.72976 10.4974 7.54885C10.7061 7.36793 10.9813 7.27242 11.2625 7.28571Z" fill="#0E0E0E"/>
    </svg>`;

const photoDeleteIcon = `
    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 3.55357V4.57143H1.0625C0.780707 4.57143 0.510456 4.67867 0.311199 4.86955C0.111942 5.06044 0 5.31933 0 5.58929C0 5.85924 0.111942 6.11813 0.311199 6.30902C0.510456 6.4999 0.780707 6.60714 1.0625 6.60714H1.4875L2.64208 17.6679C2.69475 18.1699 2.94015 18.6353 3.33069 18.9738C3.72122 19.3123 4.22907 19.4998 4.75575 19.5H12.2442C12.7709 19.4998 13.2788 19.3123 13.6693 18.9738C14.0599 18.6353 14.3052 18.1699 14.3579 17.6679L15.5125 6.60714H15.9375C16.2193 6.60714 16.4895 6.4999 16.6888 6.30902C16.8881 6.11813 17 5.85924 17 5.58929C17 5.31933 16.8881 5.06044 16.6888 4.86955C16.4895 4.67867 16.2193 4.57143 15.9375 4.57143H12.75V3.55357C12.75 2.74371 12.4142 1.96703 11.8164 1.39437C11.2186 0.821715 10.4079 0.5 9.5625 0.5H7.4375C6.59212 0.5 5.78137 0.821715 5.1836 1.39437C4.58582 1.96703 4.25 2.74371 4.25 3.55357ZM7.4375 2.53571C7.15571 2.53571 6.88546 2.64295 6.6862 2.83384C6.48694 3.02472 6.375 3.28362 6.375 3.55357V4.57143H10.625V3.55357C10.625 3.28362 10.5131 3.02472 10.3138 2.83384C10.1145 2.64295 9.84429 2.53571 9.5625 2.53571H7.4375ZM5.7375 7.28571C5.87707 7.27895 6.01666 7.29864 6.14827 7.34364C6.27989 7.38864 6.40095 7.45807 6.50451 7.54795C6.60808 7.63783 6.69212 7.74641 6.75182 7.86745C6.81151 7.9885 6.8457 8.11964 6.85242 8.25336L7.242 15.7176C7.25239 15.9851 7.15236 16.2458 6.96357 16.4432C6.77479 16.6405 6.51244 16.7587 6.23336 16.7721C5.95428 16.7855 5.68093 16.693 5.47251 16.5147C5.2641 16.3364 5.13739 16.0866 5.11983 15.8194L4.73025 8.35514C4.723 8.22154 4.7433 8.08789 4.79001 7.96181C4.83672 7.83574 4.90891 7.71973 5.00246 7.6204C5.09601 7.52108 5.20908 7.44039 5.3352 7.38297C5.46133 7.32554 5.59803 7.29249 5.7375 7.28571ZM11.2625 7.28571C11.402 7.29232 11.5387 7.3252 11.6649 7.38246C11.7911 7.43973 11.9043 7.52026 11.9979 7.61946C12.0916 7.71866 12.164 7.83457 12.2108 7.96057C12.2577 8.08657 12.2782 8.22019 12.2712 8.35379L11.8816 15.8181C11.864 16.0852 11.7373 16.335 11.5289 16.5133C11.3205 16.6916 11.0471 16.7841 10.7681 16.7707C10.489 16.7573 10.2266 16.6392 10.0378 16.4418C9.84906 16.2444 9.74903 15.9838 9.75942 15.7163L10.149 8.252C10.1633 7.98266 10.2886 7.72976 10.4974 7.54885C10.7061 7.36793 10.9813 7.27242 11.2625 7.28571Z" fill="white"/>
    </svg>`;

const albumTabIcon = `
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="hover:fill-black">
        <path d="M11.55 0H2.45C1.93283 0 1.43684 0.205446 1.07114 0.571142C0.705446 0.936838 0.5 1.43283 0.5 1.95V11.05C0.5 11.5672 0.705446 12.0632 1.07114 12.4289C1.43684 12.7946 1.93283 13 2.45 13H11.55C11.6569 12.9985 11.7635 12.9876 11.8685 12.9675L12.0635 12.922H12.109H12.1415L12.382 12.831L12.4665 12.7855C12.5315 12.7465 12.603 12.714 12.668 12.6685C12.7548 12.6046 12.8373 12.5352 12.915 12.4605L12.9605 12.402C13.0243 12.3373 13.083 12.2678 13.136 12.194L13.1945 12.1095C13.2399 12.0371 13.279 11.961 13.3115 11.882C13.3293 11.8508 13.3446 11.8182 13.357 11.7845C13.3895 11.7065 13.409 11.622 13.435 11.5375V11.44C13.4719 11.313 13.4937 11.1821 13.5 11.05V1.95C13.5 1.43283 13.2946 0.936838 12.9289 0.571142C12.5632 0.205446 12.0672 0 11.55 0ZM2.45 11.7C2.27761 11.7 2.11228 11.6315 1.99038 11.5096C1.86848 11.3877 1.8 11.2224 1.8 11.05V8.2485L3.9385 6.1035C3.99893 6.04258 4.07082 5.99422 4.15002 5.96122C4.22923 5.92822 4.31419 5.91123 4.4 5.91123C4.48581 5.91123 4.57077 5.92822 4.64997 5.96122C4.72918 5.99422 4.80107 6.04258 4.8615 6.1035L10.4515 11.7H2.45ZM12.2 11.05C12.1994 11.1301 12.184 11.2095 12.1545 11.284C12.1396 11.3157 12.1223 11.3461 12.1025 11.375C12.0851 11.4025 12.0655 11.4286 12.044 11.453L8.5665 7.9755L9.1385 7.4035C9.19893 7.34258 9.27082 7.29422 9.35003 7.26122C9.42923 7.22822 9.51419 7.21123 9.6 7.21123C9.68581 7.21123 9.77077 7.22822 9.84997 7.26122C9.92918 7.29422 10.0011 7.34258 10.0615 7.4035L12.2 9.5485V11.05ZM12.2 7.709L10.978 6.5C10.606 6.14704 10.1128 5.95028 9.6 5.95028C9.08722 5.95028 8.59398 6.14704 8.222 6.5L7.65 7.072L5.778 5.2C5.40602 4.84704 4.91278 4.65028 4.4 4.65028C3.88722 4.65028 3.39398 4.84704 3.022 5.2L1.8 6.409V1.95C1.8 1.77761 1.86848 1.61228 1.99038 1.49038C2.11228 1.36848 2.27761 1.3 2.45 1.3H11.55C11.7224 1.3 11.8877 1.36848 12.0096 1.49038C12.1315 1.61228 12.2 1.77761 12.2 1.95V7.709ZM7.975 2.6C7.78216 2.6 7.59366 2.65718 7.43332 2.76432C7.27298 2.87145 7.14801 3.02373 7.07422 3.20188C7.00042 3.38004 6.98111 3.57608 7.01873 3.76521C7.05635 3.95434 7.14921 4.12807 7.28557 4.26443C7.42193 4.40079 7.59565 4.49365 7.78479 4.53127C7.97392 4.56889 8.16996 4.54958 8.34812 4.47578C8.52627 4.40199 8.67855 4.27702 8.78568 4.11668C8.89282 3.95634 8.95 3.76784 8.95 3.575C8.95 3.31641 8.84728 3.06842 8.66443 2.88557C8.48158 2.70272 8.23359 2.6 7.975 2.6Z" fill="#737373"/>
    </svg>`;

const circleTabIcon = `
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 13C6.10083 13 5.25583 12.8293 4.465 12.4878C3.67417 12.1463 2.98625 11.6833 2.40125 11.0987C1.81625 10.5142 1.35323 9.82626 1.0122 9.035C0.671167 8.24373 0.500434 7.39873 0.500001 6.5C0.499567 5.60126 0.670301 4.75627 1.0122 3.965C1.3541 3.17373 1.81712 2.48582 2.40125 1.90125C2.98538 1.31668 3.6733 0.853666 4.465 0.5122C5.2567 0.170733 6.1017 0 7 0C7.8983 0 8.74329 0.170733 9.53499 0.5122C10.3267 0.853666 11.0146 1.31668 11.5987 1.90125C12.1829 2.48582 12.6461 3.17373 12.9884 3.965C13.3308 4.75627 13.5013 5.60126 13.5 6.5C13.4987 7.39873 13.328 8.24373 12.9878 9.035C12.6476 9.82626 12.1846 10.5142 11.5987 11.0987C11.0129 11.6833 10.325 12.1465 9.53499 12.4884C8.74503 12.8303 7.90003 13.0009 7 13ZM7 11.7C8.45166 11.7 9.68124 11.1962 10.6887 10.1887C11.6962 9.18125 12.2 7.95166 12.2 6.5C12.2 5.04833 11.6962 3.81875 10.6887 2.81125C9.68124 1.80375 8.45166 1.3 7 1.3C5.54833 1.3 4.31875 1.80375 3.31125 2.81125C2.30375 3.81875 1.8 5.04833 1.8 6.5C1.8 7.95166 2.30375 9.18125 3.31125 10.1887C4.31875 11.1962 5.54833 11.7 7 11.7Z" fill="#0E0E0E"/>
    </svg>`;

const editIcon = `
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 4.71566C18.0007 4.59723 17.978 4.47982 17.9332 4.37017C17.8884 4.26053 17.8224 4.1608 17.739 4.07671L13.923 0.260996C13.8389 0.177588 13.7392 0.111601 13.6295 0.0668159C13.5199 0.0220311 13.4024 -0.000669711 13.284 1.50417e-05C13.1655 -0.000669711 13.0481 0.0220311 12.9385 0.0668159C12.8288 0.111601 12.7291 0.177588 12.645 0.260996L10.098 2.80781L0.261015 12.6441C0.177601 12.7282 0.111609 12.8279 0.0668208 12.9375C0.0220328 13.0472 -0.00066976 13.1646 1.50428e-05 13.283V17.0987C1.50428e-05 17.3374 0.094836 17.5663 0.263618 17.7351C0.432401 17.9039 0.661319 17.9987 0.900014 17.9987H4.71601C4.84194 18.0055 4.96791 17.9858 5.08574 17.9409C5.20358 17.8959 5.31065 17.8267 5.40001 17.7377L15.183 7.90142L17.739 5.39961C17.8211 5.31239 17.8881 5.212 17.937 5.10263C17.9457 5.0309 17.9457 4.95838 17.937 4.88665C17.9412 4.84476 17.9412 4.80255 17.937 4.76066L18 4.71566ZM4.34701 16.1988H1.80001V13.652L10.737 4.71566L13.284 7.26247L4.34701 16.1988ZM14.553 5.99357L12.006 3.44676L13.284 2.17785L15.822 4.71566L14.553 5.99357Z" fill="#0E0E0E"/>
    </svg>`;

const editIconCircle = `
    <svg width="36" height="36" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 4.71566C18.0007 4.59723 17.978 4.47982 17.9332 4.37017C17.8884 4.26053 17.8224 4.1608 17.739 4.07671L13.923 0.260996C13.8389 0.177588 13.7392 0.111601 13.6295 0.0668159C13.5199 0.0220311 13.4024 -0.000669711 13.284 1.50417e-05C13.1655 -0.000669711 13.0481 0.0220311 12.9385 0.0668159C12.8288 0.111601 12.7291 0.177588 12.645 0.260996L10.098 2.80781L0.261015 12.6441C0.177601 12.7282 0.111609 12.8279 0.0668208 12.9375C0.0220328 13.0472 -0.00066976 13.1646 1.50428e-05 13.283V17.0987C1.50428e-05 17.3374 0.094836 17.5663 0.263618 17.7351C0.432401 17.9039 0.661319 17.9987 0.900014 17.9987H4.71601C4.84194 18.0055 4.96791 17.9858 5.08574 17.9409C5.20358 17.8959 5.31065 17.8267 5.40001 17.7377L15.183 7.90142L17.739 5.39961C17.8211 5.31239 17.8881 5.212 17.937 5.10263C17.9457 5.0309 17.9457 4.95838 17.937 4.88665C17.9412 4.84476 17.9412 4.80255 17.937 4.76066L18 4.71566ZM4.34701 16.1988H1.80001V13.652L10.737 4.71566L13.284 7.26247L4.34701 16.1988ZM14.553 5.99357L12.006 3.44676L13.284 2.17785L15.822 4.71566L14.553 5.99357Z" fill="white"/>
    </svg>`;

const editIconProfile = `
    <svg width="32" height="32" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 4.71566C18.0007 4.59723 17.978 4.47982 17.9332 4.37017C17.8884 4.26053 17.8224 4.1608 17.739 4.07671L13.923 0.260996C13.8389 0.177588 13.7392 0.111601 13.6295 0.0668159C13.5199 0.0220311 13.4024 -0.000669711 13.284 1.50417e-05C13.1655 -0.000669711 13.0481 0.0220311 12.9385 0.0668159C12.8288 0.111601 12.7291 0.177588 12.645 0.260996L10.098 2.80781L0.261015 12.6441C0.177601 12.7282 0.111609 12.8279 0.0668208 12.9375C0.0220328 13.0472 -0.00066976 13.1646 1.50428e-05 13.283V17.0987C1.50428e-05 17.3374 0.094836 17.5663 0.263618 17.7351C0.432401 17.9039 0.661319 17.9987 0.900014 17.9987H4.71601C4.84194 18.0055 4.96791 17.9858 5.08574 17.9409C5.20358 17.8959 5.31065 17.8267 5.40001 17.7377L15.183 7.90142L17.739 5.39961C17.8211 5.31239 17.8881 5.212 17.937 5.10263C17.9457 5.0309 17.9457 4.95838 17.937 4.88665C17.9412 4.84476 17.9412 4.80255 17.937 4.76066L18 4.71566ZM4.34701 16.1988H1.80001V13.652L10.737 4.71566L13.284 7.26247L4.34701 16.1988ZM14.553 5.99357L12.006 3.44676L13.284 2.17785L15.822 4.71566L14.553 5.99357Z" fill="white"/>
    </svg>`;

const settingsIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.1754 13.175C21.2268 12.8 21.2525 12.4125 21.2525 12C21.2525 11.6 21.2268 11.2 21.1626 10.825L23.7713 8.85C24.0026 8.675 24.0668 8.3375 23.9255 8.0875L21.4581 3.9375C21.3039 3.6625 20.9827 3.575 20.6999 3.6625L17.6286 4.8625C16.9861 4.3875 16.305 3.9875 15.5468 3.6875L15.0842 0.5125C15.0328 0.2125 14.7758 0 14.4673 0H9.53266C9.22425 0 8.98008 0.2125 8.92868 0.5125L8.46605 3.6875C7.70786 3.9875 7.01392 4.4 6.38424 4.8625L3.31292 3.6625C3.0302 3.5625 2.70893 3.6625 2.55472 3.9375L0.100236 8.0875C-0.0539726 8.35 -0.00256984 8.675 0.254445 8.85L2.86314 10.825C2.79889 11.2 2.74748 11.6125 2.74748 12C2.74748 12.3875 2.77319 12.8 2.83744 13.175L0.228743 15.15C-0.00256982 15.325 -0.0668233 15.6625 0.0745346 15.9125L2.54187 20.0625C2.69608 20.3375 3.01735 20.425 3.30006 20.3375L6.37139 19.1375C7.01392 19.6125 7.69501 20.0125 8.4532 20.3125L8.91583 23.4875C8.98008 23.7875 9.22425 24 9.53266 24H14.4673C14.7758 24 15.0328 23.7875 15.0713 23.4875L15.5339 20.3125C16.2921 20.0125 16.9861 19.6125 17.6158 19.1375L20.6871 20.3375C20.9698 20.4375 21.2911 20.3375 21.4453 20.0625L23.9126 15.9125C24.0668 15.6375 24.0026 15.325 23.7584 15.15L21.1754 13.175ZM12 16.5C9.45556 16.5 7.37374 14.475 7.37374 12C7.37374 9.525 9.45556 7.5 12 7.5C14.5444 7.5 16.6263 9.525 16.6263 12C16.6263 14.475 14.5444 16.5 12 16.5Z" fill="#0E0E0E"/>
    </svg>`;

const removeUserIcon = `
    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 10.5C17.5 7.7375 15.2625 5.5 12.5 5.5C9.7375 5.5 7.5 7.7375 7.5 10.5C7.5 13.2625 9.7375 15.5 12.5 15.5C15.2625 15.5 17.5 13.2625 17.5 10.5ZM2.5 23V24.25C2.5 24.9375 3.0625 25.5 3.75 25.5H21.25C21.9375 25.5 22.5 24.9375 22.5 24.25V23C22.5 19.675 15.8375 18 12.5 18C9.1625 18 2.5 19.675 2.5 23ZM22.5 13H27.5C28.1875 13 28.75 13.5625 28.75 14.25C28.75 14.9375 28.1875 15.5 27.5 15.5H22.5C21.8125 15.5 21.25 14.9375 21.25 14.25C21.25 13.5625 21.8125 13 22.5 13Z" fill="#0E0E0E"/>
    </svg>`;

const ownerIcon = `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8382 11.1263L21.609 13.5616C21.2313 17.5742 21.0425 19.5805 19.8599 20.7902C18.6773 22 16.9048 22 13.3599 22H10.6401C7.09517 22 5.32271 22 4.14009 20.7902C2.95748 19.5805 2.76865 17.5742 2.391 13.5616L2.16181 11.1263C1.9818 9.2137 1.8918 8.25739 2.21899 7.86207C2.39598 7.64823 2.63666 7.5172 2.89399 7.4946C3.36968 7.45282 3.96708 8.1329 5.16187 9.49307C5.77977 10.1965 6.08872 10.5482 6.43337 10.6027C6.62434 10.6328 6.81892 10.6018 6.99526 10.5131C7.31351 10.3529 7.5257 9.91812 7.95007 9.04852L10.1869 4.46486C10.9888 2.82162 11.3898 2 12 2C12.6102 2 13.0112 2.82162 13.8131 4.46485L16.0499 9.04851C16.4743 9.91812 16.6865 10.3529 17.0047 10.5131C17.1811 10.6018 17.3757 10.6328 17.5666 10.6027C17.9113 10.5482 18.2202 10.1965 18.8381 9.49307C20.0329 8.1329 20.6303 7.45282 21.106 7.4946C21.3633 7.5172 21.604 7.64823 21.781 7.86207C22.1082 8.25739 22.0182 9.2137 21.8382 11.1263ZM12.9524 12.699L12.8541 12.5227C12.4741 11.841 12.2841 11.5002 12 11.5002C11.7159 11.5002 11.5259 11.841 11.1459 12.5227L11.0476 12.699C10.9397 12.8927 10.8857 12.9896 10.8015 13.0535C10.7173 13.1174 10.6125 13.1411 10.4028 13.1886L10.2119 13.2318C9.47396 13.3987 9.10501 13.4822 9.01723 13.7645C8.92945 14.0468 9.18097 14.3409 9.68403 14.9291L9.81418 15.0813C9.95713 15.2485 10.0286 15.3321 10.0608 15.4355C10.0929 15.5389 10.0821 15.6504 10.0605 15.8734L10.0408 16.0765C9.96476 16.8613 9.92674 17.2538 10.1565 17.4282C10.3864 17.6027 10.7318 17.4436 11.4227 17.1255L11.6014 17.0432C11.7978 16.9528 11.8959 16.9076 12 16.9076C12.1041 16.9076 12.2022 16.9528 12.3986 17.0432L12.5773 17.1255C13.2682 17.4436 13.6136 17.6027 13.8435 17.4282C14.0733 17.2538 14.0352 16.8613 13.9592 16.0765L13.9395 15.8734C13.9179 15.6504 13.9071 15.5389 13.9392 15.4355C13.9714 15.3321 14.0429 15.2485 14.1858 15.0813L14.316 14.9291C14.819 14.3409 15.0706 14.0468 14.9828 13.7645C14.895 13.4822 14.526 13.3987 13.7881 13.2318L13.5972 13.1886C13.3875 13.1411 13.2827 13.1174 13.1985 13.0535C13.1143 12.9896 13.0603 12.8927 12.9524 12.699Z" fill="#000000"></path>
      </g>
    </svg>`;

const shareIcon = `
    <svg width="22" height="22" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.52237 14.4666C9.62361 14.5669 9.70395 14.6862 9.75876 14.8174C9.81357 14.9487 9.84179 15.0895 9.84179 15.2316C9.84179 15.3737 9.81357 15.5145 9.75876 15.6458C9.70395 15.777 9.62361 15.8963 9.52237 15.9966L9.059 16.4574C8.56713 16.9483 7.98226 17.3375 7.33823 17.6022C6.69419 17.867 6.00375 18.0022 5.30685 18C4.25734 18.0003 3.23132 17.6911 2.35858 17.1114C1.48584 16.5317 0.805602 15.7076 0.403928 14.7434C0.00225372 13.7792 -0.102809 12.7181 0.102032 11.6945C0.306874 10.6709 0.812414 9.73068 1.55469 8.99285L4.69959 5.86537C5.36851 5.20026 6.20404 4.72503 7.11968 4.48888C8.03532 4.25274 8.99778 4.26427 9.90744 4.52227C10.8171 4.78027 11.6409 5.27537 12.2935 5.95632C12.9461 6.63726 13.4039 7.4793 13.6193 8.39525C13.655 8.53452 13.6624 8.67947 13.641 8.82161C13.6197 8.96375 13.57 9.10022 13.4949 9.22302C13.4198 9.34582 13.3209 9.45248 13.2038 9.53676C13.0867 9.62104 12.9539 9.68123 12.8132 9.71381C12.6724 9.74639 12.5265 9.75071 12.3841 9.72651C12.2416 9.70231 12.1055 9.65008 11.9836 9.57287C11.8617 9.49567 11.7565 9.39505 11.6742 9.27691C11.5919 9.15876 11.5342 9.02547 11.5043 8.88485C11.3765 8.34416 11.1057 7.84725 10.72 7.44547C10.3344 7.0437 9.84782 6.75166 9.31065 6.59953C8.77347 6.4474 8.20519 6.4407 7.66454 6.58014C7.12389 6.71958 6.63051 7.00008 6.23539 7.39266L3.09049 10.5201C2.65211 10.9557 2.35348 11.5108 2.23235 12.1152C2.11122 12.7196 2.17304 13.3461 2.40999 13.9156C2.64694 14.485 3.04838 14.9718 3.56354 15.3143C4.0787 15.6569 4.68443 15.8398 5.30413 15.84C5.71589 15.8411 6.12379 15.7611 6.50422 15.6044C6.88466 15.4478 7.23008 15.2177 7.52049 14.9274L7.98295 14.4666C8.08386 14.3658 8.20381 14.2858 8.3359 14.2312C8.46799 14.1766 8.60962 14.1485 8.75266 14.1485C8.8957 14.1485 9.03734 14.1766 9.16943 14.2312C9.30151 14.2858 9.42146 14.3658 9.52237 14.4666ZM19.4458 1.54541C18.4504 0.555883 17.1006 0 15.6932 0C14.2857 0 12.9359 0.555883 11.9405 1.54541L11.4781 2.00531C11.2741 2.2082 11.1595 2.48337 11.1595 2.7703C11.1595 3.05723 11.2741 3.3324 11.4781 3.53529C11.6821 3.73818 11.9588 3.85216 12.2473 3.85216C12.5359 3.85216 12.8126 3.73818 13.0166 3.53529L13.48 3.0745C14.068 2.4897 14.8656 2.16116 15.6972 2.16116C16.5289 2.16116 17.3264 2.4897 17.9145 3.0745C18.5025 3.6593 18.8329 4.45245 18.8329 5.27948C18.8329 6.10651 18.5025 6.89966 17.9145 7.48446L14.7642 10.6074C14.4738 10.8978 14.1284 11.128 13.7479 11.2846C13.3675 11.4413 12.9596 11.5213 12.5478 11.52C11.8414 11.5195 11.156 11.2817 10.6025 10.8452C10.0491 10.4087 9.66018 9.79912 9.49884 9.11525C9.43355 8.83622 9.25948 8.5944 9.01491 8.44301C8.77034 8.29161 8.47531 8.24303 8.19473 8.30795C7.91414 8.37288 7.67098 8.54599 7.51874 8.7892C7.3665 9.03242 7.31765 9.32581 7.38293 9.60484C7.65544 10.763 8.31338 11.7957 9.25005 12.5354C10.1867 13.2751 11.3472 13.6784 12.5433 13.68H12.5478C13.245 13.6819 13.9357 13.5463 14.5799 13.2811C15.2241 13.0158 15.809 12.6262 16.3009 12.1347L19.4458 9.00725C19.9385 8.51733 20.3294 7.93569 20.5961 7.29553C20.8627 6.65538 21 5.96925 21 5.27633C21 4.58341 20.8627 3.89728 20.5961 3.25713C20.3294 2.61697 19.9385 2.03532 19.4458 1.54541Z" fill="black"/>
    </svg>`;

const circleEditIcon = `
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 5.76359C22.0008 5.61883 21.9731 5.47533 21.9183 5.34132C21.8636 5.20731 21.7829 5.08542 21.681 4.98265L17.017 0.318995C16.9142 0.217053 16.7923 0.136401 16.6583 0.0816639C16.5243 0.026927 16.3808 -0.000818536 16.236 1.83843e-05C16.0912 -0.000818536 15.9477 0.026927 15.8137 0.0816639C15.6797 0.136401 15.5578 0.217053 15.455 0.318995L12.342 3.43176L0.319018 15.4539C0.217068 15.5566 0.136411 15.6785 0.0816699 15.8125C0.0269289 15.9466 -0.000818595 16.09 1.83857e-05 16.2348V20.8985C1.83857e-05 21.1902 0.115911 21.4699 0.3222 21.6762C0.52849 21.8825 0.808279 21.9984 1.10002 21.9984H5.76401C5.91793 22.0067 6.07189 21.9827 6.21591 21.9277C6.35993 21.8728 6.49079 21.7882 6.60001 21.6794L18.557 9.6573L21.681 6.59953C21.7814 6.49292 21.8632 6.37023 21.923 6.23655C21.9336 6.14888 21.9336 6.06025 21.923 5.97257C21.9281 5.92137 21.9281 5.86978 21.923 5.81858L22 5.76359ZM5.31301 19.7985H2.20001V16.6858L13.123 5.76359L16.236 8.87636L5.31301 19.7985ZM17.787 7.32547L14.674 4.2127L16.236 2.66182L19.338 5.76359L17.787 7.32547Z" fill="#0E0E0E"/>
    </svg>`;

const commentIcon = `
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 19.125C8.79414 19.125 7.12658 18.6192 5.70821 17.6714C4.28983 16.7237 3.18434 15.3767 2.53154 13.8006C1.87873 12.2246 1.70793 10.4904 2.04073 8.81735C2.37352 7.14426 3.19498 5.60744 4.4012 4.40121C5.60743 3.19498 7.14426 2.37353 8.81735 2.04073C10.4904 1.70793 12.2246 1.87874 13.8006 2.53154C15.3767 3.18435 16.7237 4.28984 17.6714 5.70821C18.6192 7.12658 19.125 8.79414 19.125 10.5C19.125 11.926 18.78 13.2705 18.1667 14.455L19.125 19.125L14.455 18.1667C13.2705 18.78 11.925 19.125 10.5 19.125Z" stroke="#F8F4EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

const addPhotosIcon = `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M18.5 3V5.5M18.5 8V5.5M18.5 5.5H16M18.5 5.5H21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
    </svg>`;

const closeReplyIcon = `
    <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 5L19 19M5 19L19 5" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g>
    </svg>`;

const publicIcon = `
    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.9736 6.39326C15.9736 6.39326 15.9736 6.39326 15.9736 6.35199C15.3926 4.76406 14.3383 3.39308 12.9533 2.42451C11.5684 1.45594 9.91967 0.936523 8.23016 0.936523C6.54065 0.936523 4.89191 1.45594 3.50697 2.42451C2.12203 3.39308 1.06772 4.76406 0.486674 6.35199C0.486674 6.35199 0.486674 6.35199 0.486674 6.39326C-0.162225 8.18517 -0.162225 10.1482 0.486674 11.9401C0.486674 11.9401 0.486674 11.9401 0.486674 11.9814C1.06772 13.5693 2.12203 14.9403 3.50697 15.9089C4.89191 16.8774 6.54065 17.3968 8.23016 17.3968C9.91967 17.3968 11.5684 16.8774 12.9533 15.9089C14.3383 14.9403 15.3926 13.5693 15.9736 11.9814C15.9736 11.9814 15.9736 11.9814 15.9736 11.9401C16.6225 10.1482 16.6225 8.18517 15.9736 6.39326ZM1.83086 10.8175C1.54489 9.73558 1.54489 8.59779 1.83086 7.51583H3.36471C3.23279 8.61244 3.23279 9.72092 3.36471 10.8175H1.83086ZM2.50707 12.4684H3.66159C3.85515 13.2045 4.13181 13.9162 4.48624 14.5897C3.6775 14.0383 3.00145 13.3137 2.50707 12.4684ZM3.66159 5.86499H2.50707C2.99433 5.0223 3.66174 4.29789 4.4615 3.74365C4.1156 4.41822 3.84725 5.12988 3.66159 5.86499ZM7.38901 15.5224C6.37615 14.7785 5.66479 13.6943 5.38511 12.4684H7.38901V15.5224ZM7.38901 10.8175H5.03051C4.87662 9.72235 4.87662 8.61101 5.03051 7.51583H7.38901V10.8175ZM7.38901 5.86499H5.38511C5.66479 4.63904 6.37615 3.55489 7.38901 2.81092V5.86499ZM13.9203 5.86499H12.7657C12.5722 5.12884 12.2955 4.41714 11.9411 3.74365C12.7498 4.29509 13.4259 5.0197 13.9203 5.86499ZM9.03832 2.81092C10.0512 3.55489 10.7625 4.63904 11.0422 5.86499H9.03832V2.81092ZM9.03832 15.5224V12.4684H11.0422C10.7625 13.6943 10.0512 14.7785 9.03832 15.5224ZM11.3968 10.8175H9.03832V7.51583H11.3968C11.5507 8.61101 11.5507 9.72235 11.3968 10.8175ZM11.9658 14.5897C12.3203 13.9162 12.5969 13.2045 12.7905 12.4684H13.945C13.4506 13.3137 12.7746 14.0383 11.9658 14.5897ZM14.5965 10.8175H13.0626C13.1297 10.2698 13.1627 9.71848 13.1616 9.16668C13.1625 8.61489 13.1294 8.06356 13.0626 7.51583H14.5965C14.8824 8.59779 14.8824 9.73558 14.5965 10.8175Z" fill="white"/>
    </svg>`;

const modIcon = `
    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> <path d="M11.5 9.00011L10 12.0001H14L12.5 15.0001M20 12.0001C20 16.4612 14.54 19.6939 12.6414 20.6831C12.4361 20.7901 12.3334 20.8436 12.191 20.8713C12.08 20.8929 11.92 20.8929 11.809 20.8713C11.6666 20.8436 11.5639 20.7901 11.3586 20.6831C9.45996 19.6939 4 16.4612 4 12.0001V8.21772C4 7.4182 4 7.01845 4.13076 6.67482C4.24627 6.37126 4.43398 6.10039 4.67766 5.88564C4.9535 5.64255 5.3278 5.50219 6.0764 5.22146L11.4382 3.21079C11.6461 3.13283 11.75 3.09385 11.857 3.07839C11.9518 3.06469 12.0482 3.06469 12.143 3.07839C12.25 3.09385 12.3539 3.13283 12.5618 3.21079L17.9236 5.22146C18.6722 5.50219 19.0465 5.64255 19.3223 5.88564C19.566 6.10039 19.7537 6.37126 19.8692 6.67482C20 7.01845 20 7.4182 20 8.21772V12.0001Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g>
    </svg>`;

const largeDeleteIcon = `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 3.55357V4.57143H1.0625C0.780707 4.57143 0.510456 4.67867 0.311199 4.86955C0.111942 5.06044 0 5.31933 0 5.58929C0 5.85924 0.111942 6.11813 0.311199 6.30902C0.510456 6.4999 0.780707 6.60714 1.0625 6.60714H1.4875L2.64208 17.6679C2.69475 18.1699 2.94015 18.6353 3.33069 18.9738C3.72122 19.3123 4.22907 19.4998 4.75575 19.5H12.2442C12.7709 19.4998 13.2788 19.3123 13.6693 18.9738C14.0599 18.6353 14.3052 18.1699 14.3579 17.6679L15.5125 6.60714H15.9375C16.2193 6.60714 16.4895 6.4999 16.6888 6.30902C16.8881 6.11813 17 5.85924 17 5.58929C17 5.31933 16.8881 5.06044 16.6888 4.86955C16.4895 4.67867 16.2193 4.57143 15.9375 4.57143H12.75V3.55357C12.75 2.74371 12.4142 1.96703 11.8164 1.39437C11.2186 0.821715 10.4079 0.5 9.5625 0.5H7.4375C6.59212 0.5 5.78137 0.821715 5.1836 1.39437C4.58582 1.96703 4.25 2.74371 4.25 3.55357ZM7.4375 2.53571C7.15571 2.53571 6.88546 2.64295 6.6862 2.83384C6.48694 3.02472 6.375 3.28362 6.375 3.55357V4.57143H10.625V3.55357C10.625 3.28362 10.5131 3.02472 10.3138 2.83384C10.1145 2.64295 9.84429 2.53571 9.5625 2.53571H7.4375ZM5.7375 7.28571C5.87707 7.27895 6.01666 7.29864 6.14827 7.34364C6.27989 7.38864 6.40095 7.45807 6.50451 7.54795C6.60808 7.63783 6.69212 7.74641 6.75182 7.86745C6.81151 7.9885 6.8457 8.11964 6.85242 8.25336L7.242 15.7176C7.25239 15.9851 7.15236 16.2458 6.96357 16.4432C6.77479 16.6405 6.51244 16.7587 6.23336 16.7721C5.95428 16.7855 5.68093 16.693 5.47251 16.5147C5.2641 16.3364 5.13739 16.0866 5.11983 15.8194L4.73025 8.35514C4.723 8.22154 4.7433 8.08789 4.79001 7.96181C4.83672 7.83574 4.90891 7.71973 5.00246 7.6204C5.09601 7.52108 5.20908 7.44039 5.3352 7.38297C5.46133 7.32554 5.59803 7.29249 5.7375 7.28571ZM11.2625 7.28571C11.402 7.29232 11.5387 7.3252 11.6649 7.38246C11.7911 7.43973 11.9043 7.52026 11.9979 7.61946C12.0916 7.71866 12.164 7.83457 12.2108 7.96057C12.2577 8.08657 12.2782 8.22019 12.2712 8.35379L11.8816 15.8181C11.864 16.0852 11.7373 16.335 11.5289 16.5133C11.3205 16.6916 11.0471 16.7841 10.7681 16.7707C10.489 16.7573 10.2266 16.6392 10.0378 16.4418C9.84906 16.2444 9.74903 15.9838 9.75942 15.7163L10.149 8.252C10.1633 7.98266 10.2886 7.72976 10.4974 7.54885C10.7061 7.36793 10.9813 7.27242 11.2625 7.28571Z" fill="#0E0E0E"/>
    </svg>`;

const activityArrowIcon = `
    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L7.5 7.5L1 14" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

const privacyIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7719 17.614V14.1053M16.1579 9.7193V6.38596C16.1579 5.22273 15.6958 4.10715 14.8733 3.28462C14.0507 2.46209 12.9352 2 11.7719 2C10.6087 2 9.49311 2.46209 8.67058 3.28462C7.84806 4.10715 7.38596 5.22273 7.38596 6.38596V9.7193M3 20.2456V11.4737C3 11.0084 3.18484 10.5622 3.51385 10.2331C3.84286 9.90413 4.28909 9.7193 4.75439 9.7193H11.7719H18.7895C19.2548 9.7193 19.701 9.90413 20.03 10.2331C20.359 10.5622 20.5439 11.0084 20.5439 11.4737V20.2456C20.5439 20.7109 20.359 21.1571 20.03 21.4862C19.701 21.8152 19.2548 22 18.7895 22H4.75439C4.28909 22 3.84286 21.8152 3.51385 21.4862C3.18484 21.1571 3 20.7109 3 20.2456Z" stroke="#67696B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

const notificationIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.04039 9.36922C5.04039 7.41478 5.81679 5.54039 7.19879 4.15839C8.58078 2.7764 10.4552 2 12.4096 2C14.364 2 16.2384 2.7764 17.6204 4.15839C19.0024 5.54039 19.7788 7.41478 19.7788 9.36922V13.3318L21.6969 17.168C21.7852 17.3445 21.8269 17.5407 21.8181 17.7379C21.8092 17.9352 21.75 18.1268 21.6462 18.2948C21.5425 18.4627 21.3975 18.6013 21.225 18.6974C21.0526 18.7935 20.8584 18.844 20.661 18.8439H16.4879C16.2538 19.7474 15.7262 20.5476 14.9881 21.1188C14.2499 21.6901 13.343 22 12.4096 22C11.4762 22 10.5693 21.6901 9.83116 21.1188C9.09301 20.5476 8.56544 19.7474 8.33127 18.8439H4.15819C3.96078 18.844 3.76663 18.7935 3.5942 18.6974C3.42177 18.6013 3.27677 18.4627 3.17297 18.2948C3.06918 18.1268 3.01004 17.9352 3.00117 17.7379C2.9923 17.5407 3.03399 17.3445 3.12229 17.168L5.04039 13.3318V9.36922ZM10.5863 18.8439C10.7711 19.164 11.0368 19.4297 11.3569 19.6145C11.677 19.7993 12.04 19.8966 12.4096 19.8966C12.7792 19.8966 13.1422 19.7993 13.4623 19.6145C13.7824 19.4297 14.0482 19.164 14.233 18.8439H10.5863ZM12.4096 4.10549C11.0136 4.10549 9.67473 4.66006 8.68759 5.6472C7.70045 6.63434 7.14588 7.97319 7.14588 9.36922V13.3318C7.14586 13.6585 7.06981 13.9807 6.92375 14.2729L5.69204 16.7384H19.1282L17.8965 14.2729C17.7501 13.9807 17.6737 13.6585 17.6733 13.3318V9.36922C17.6733 7.97319 17.1188 6.63434 16.1316 5.6472C15.1445 4.66006 13.8056 4.10549 12.4096 4.10549Z" fill="#737373"/>
    </svg>`;

const darkModeIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21C9.5 21 7.375 20.125 5.625 18.375C3.875 16.625 3 14.5 3 12C3 9.5 3.875 7.375 5.625 5.625C7.375 3.875 9.5 3 12 3C12.2333 3 12.4627 3.00833 12.688 3.025C12.9127 3.04167 13.1333 3.06667 13.35 3.1C12.6667 3.58333 12.121 4.21233 11.713 4.987C11.3043 5.76233 11.1 6.6 11.1 7.5C11.1 9 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.4167 12.9 18.2583 12.6957 19.025 12.287C19.7917 11.879 20.4167 11.3333 20.9 10.65C20.9333 10.8667 20.9583 11.0873 20.975 11.312C20.9917 11.5373 21 11.7667 21 12C21 14.5 20.125 16.625 18.375 18.375C16.625 20.125 14.5 21 12 21ZM12 19C13.4667 19 14.7833 18.596 15.95 17.788C17.1167 16.9793 17.9667 15.925 18.5 14.625C18.1667 14.7083 17.8333 14.775 17.5 14.825C17.1667 14.875 16.8333 14.9 16.5 14.9C14.45 14.9 12.704 14.1793 11.262 12.738C9.82067 11.296 9.1 9.55 9.1 7.5C9.1 7.16667 9.125 6.83333 9.175 6.5C9.225 6.16667 9.29167 5.83333 9.375 5.5C8.075 6.03333 7.021 6.88333 6.213 8.05C5.40433 9.21667 5 10.5333 5 12C5 13.9333 5.68333 15.5833 7.05 16.95C8.41667 18.3167 10.0667 19 12 19Z" fill="#67696B"/>
    </svg>`;

const contrastIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.5C17.52 21.5 22 17.02 22 11.5C22 5.98 17.52 1.5 12 1.5C6.48 1.5 2 5.98 2 11.5C2 17.02 6.48 21.5 12 21.5ZM13 3.57C16.94 4.06 20 7.42 20 11.5C20 15.58 16.95 18.94 13 19.43V3.57Z" fill="#737373"/>
    </svg>`;

const fontIcon = `
    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.93772 3C7.16522 3 6.47647 3.4875 6.22147 4.2175L2.05272 16.1275C2.01201 16.2437 1.99459 16.3668 2.00146 16.4898C2.00832 16.6127 2.03934 16.7331 2.09273 16.8441C2.20056 17.0682 2.39301 17.2403 2.62772 17.3225C2.86244 17.4047 3.1202 17.3903 3.34431 17.2825C3.56842 17.1747 3.74051 16.9822 3.82272 16.7475L5.24397 12.6875H10.6315L12.0527 16.7475C12.1349 16.9822 12.307 17.1747 12.5311 17.2825C12.7552 17.3903 13.013 17.4047 13.2477 17.3225C13.4824 17.2403 13.6749 17.0682 13.7827 16.8441C13.8905 16.62 13.9049 16.3622 13.8227 16.1275L9.65397 4.2175C9.52935 3.86172 9.29726 3.55346 8.9898 3.33535C8.68233 3.11724 8.31469 3.00005 7.93772 3ZM9.97522 10.8125L7.93772 4.99L5.90022 10.8125H9.97522ZM16.394 14.5575C16.394 14.2788 16.744 13.625 17.834 13.625H20.0002C19.6327 14.905 18.5277 15.5 17.6252 15.5C17.0627 15.5 16.779 15.3325 16.6352 15.1888C16.5555 15.1045 16.4932 15.0054 16.4518 14.8971C16.4104 14.7888 16.3907 14.6734 16.394 14.5575ZM20.1252 15.5V16.4375C20.1252 16.6861 20.224 16.9246 20.3998 17.1004C20.5756 17.2762 20.8141 17.375 21.0627 17.375C21.3114 17.375 21.5498 17.2762 21.7256 17.1004C21.9015 16.9246 22.0002 16.6861 22.0002 16.4375V12.6875C22.0002 11.2913 21.6502 10.1063 20.909 9.2575C20.1515 8.3925 19.0927 8 17.9377 8C17.2752 8 16.7552 8.0875 16.3052 8.24375C15.8827 8.39 15.5552 8.58625 15.3002 8.73875L15.269 8.7575C15.0555 8.88514 14.9014 9.09236 14.8407 9.33357C14.8106 9.45301 14.8044 9.5772 14.8223 9.69906C14.8403 9.82091 14.882 9.93804 14.9452 10.0438C15.0084 10.1495 15.0918 10.2417 15.1907 10.3152C15.2895 10.3887 15.4019 10.442 15.5213 10.472C15.7625 10.5327 16.018 10.4951 16.2315 10.3675C16.5065 10.2025 16.6877 10.0963 16.919 10.0162C17.1415 9.93875 17.4477 9.875 17.9377 9.875C18.6577 9.875 19.1602 10.1075 19.4977 10.4925C19.7365 10.765 19.9402 11.1713 20.0477 11.75H17.834C16.0065 11.75 14.5115 12.9712 14.519 14.5675C14.5227 15.245 14.7577 15.9625 15.309 16.5138C15.8677 17.0737 16.6652 17.375 17.6252 17.375C18.8752 17.375 19.8127 16.4375 19.8127 15.5H20.1252Z" fill="#67696B"/>
    </svg>`;

const logOutIcon = `
    <svg width="24" height="24" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 6V4C14 3.46957 13.7893 2.96086 13.4142 2.58579C13.0391 2.21071 12.5304 2 12 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H12C12.5304 18 13.0391 17.7893 13.4142 17.4142C13.7893 17.0391 14 16.5304 14 16V14" stroke="#67696B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 10H21L18 7M18 13L21 10" stroke="#67696B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;