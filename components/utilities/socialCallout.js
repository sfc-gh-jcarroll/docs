import Link from 'next/link'

export default function SocialCallout() {
    return (
        <section className="block-social-callouts">
            <h2>Other Media</h2>
            <section className="social-container">
                <section className="social you-tube">
                    <a className="not-link" href="https://www.youtube.com/channel/UC3LD42rjj-Owtxsa6PwGU5Q" target="_blank">
                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8276 17.8757C11.0323 17.845 9.2319 17.845 7.43665 17.7734C6.06686 17.7172 4.69189 17.6251 3.33767 17.4308C1.63581 17.1853 0.546208 16.0449 0.333476 14.3471C0.17263 13.0227 0.058481 11.6879 0.0221609 10.3532C-0.0193478 8.93159 0.0117837 7.50995 0.0792353 6.0883C0.125933 5.13713 0.271213 4.19107 0.411305 3.25012C0.634414 1.74666 2.0509 0.723891 3.25984 0.57559C4.56736 0.417061 5.89045 0.284101 7.20835 0.253418C10.1555 0.186939 13.1026 0.156256 16.0445 0.181825C17.8398 0.197166 19.635 0.325012 21.4251 0.422175C21.8972 0.447744 22.3694 0.514224 22.8364 0.606273C24.284 0.892648 25.1609 1.77223 25.4722 3.18364C25.7627 4.49279 25.8406 5.8275 25.908 7.16221C26.017 9.37138 25.9495 11.5703 25.6745 13.7642C25.5863 14.4443 25.5085 15.1449 25.1401 15.7483C24.5123 16.7711 23.568 17.3592 22.3746 17.4666C20.8024 17.6098 19.2251 17.7274 17.6478 17.7785C16.0445 17.8297 14.4309 17.7888 12.8276 17.7888C12.8276 17.8245 12.8276 17.8501 12.8276 17.8757ZM10.4875 12.9511C12.6667 11.6266 14.8096 10.3277 16.994 9.00319C14.7993 7.67359 12.6564 6.37468 10.4875 5.05531C10.4875 7.70427 10.4875 10.3021 10.4875 12.9511Z" fill="#A3A8B8" /></svg>
                    </a>
                    <article>
                        <h5 className="large bold">YouTube</h5>
                        <p className="tiny">Watch screencasts made by the Streamlit team and the community.</p>
                    </article>
                </section>
                <section className="social twitter">
                    <a className="not-link" href="https://twitter.com/streamlit" target="_blank">
                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.9683 0.526535C22.5928 1.56402 21.8955 2.36683 20.9031 2.95968C21.368 2.91851 21.8239 2.83205 22.271 2.71678C22.7225 2.60562 23.1561 2.45741 23.5986 2.28449C23.5986 2.32566 23.5763 2.34625 23.5629 2.36683C22.946 3.19435 22.1994 3.91071 21.3233 4.51179C21.2428 4.56943 21.207 4.61883 21.2115 4.71764C21.2651 6.1133 21.0595 7.47603 20.6214 8.81405C20.1029 10.3867 19.3072 11.8277 18.2119 13.1287C16.9334 14.6478 15.3554 15.8376 13.469 16.6693C12.3156 17.1798 11.1042 17.5174 9.8391 17.7068C9.10597 17.8138 8.37284 17.8673 7.63078 17.8797C5.98571 17.9044 4.38982 17.6656 2.83863 17.1674C1.87305 16.8545 0.952171 16.4428 0.0804651 15.9365C0.0536434 15.92 0.0178811 15.9118 0 15.8788C2.633 16.1217 5.00672 15.5206 7.11669 14.0426C5.87395 13.9809 4.79662 13.5774 3.89362 12.787C3.29907 12.2682 2.87886 11.6465 2.62406 10.9178C3.34824 11.0372 4.05902 11.0208 4.79215 10.8478C3.3393 10.5308 2.24408 9.7939 1.52437 8.61232C1.10863 7.93301 0.920879 7.19607 0.925349 6.40149C1.60483 6.7432 2.32008 6.92847 3.10238 6.9614C2.93698 6.84201 2.78052 6.7432 2.64194 6.62793C1.82835 5.96921 1.29638 5.15404 1.07287 4.18243C0.822532 3.09554 0.992403 2.06218 1.5646 1.08645C1.61824 0.991756 1.62271 0.995873 1.69424 1.0741C2.70452 2.19392 3.88468 3.13259 5.23917 3.88189C6.67413 4.67647 8.22085 5.20756 9.87039 5.4834C10.4113 5.57398 10.9567 5.63161 11.5065 5.66043C11.5914 5.66455 11.6183 5.66043 11.6004 5.56574C11.3053 4.10009 11.6674 2.79088 12.7403 1.67106C13.5271 0.843544 14.5284 0.357738 15.7131 0.221878C17.1167 0.0571976 18.3729 0.398908 19.4726 1.23054C19.6022 1.32935 19.7184 1.43227 19.8347 1.54343C19.8749 1.58049 19.9106 1.58872 19.9732 1.58049C21.0059 1.38699 21.9714 1.04116 22.8834 0.559471C22.9057 0.543003 22.9236 0.522418 22.9683 0.526535Z" fill="#A3A8B8" /></svg>
                    </a>
                    <article>
                        <h5 className="large bold">Twitter</h5>
                        <p className="tiny">Follow @streamlit on Twitter to keep up with the latest news.</p>
                    </article>
                </section>
                <section className="social git-hub">
                    <a className="not-link" href="https://github.com/streamlit" target="_blank">
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8513 14.5613C13.2388 14.4967 13.56 14.4506 13.8718 14.3768C16.168 13.8508 17.3491 12.4668 17.4908 10.1508C17.5664 8.98815 17.368 7.91781 16.5837 6.99511C16.5081 6.90283 16.5081 6.70907 16.5459 6.57989C16.716 5.8694 16.6688 5.17737 16.4609 4.48534C16.3759 4.20853 16.2152 4.07013 15.9601 4.1624C15.242 4.42075 14.5427 4.71602 13.8246 4.97438C13.5978 5.05742 13.3238 5.13124 13.0876 5.0851C11.6135 4.78984 10.1489 4.79906 8.6843 5.09433C8.46697 5.14047 8.21184 5.06665 7.99451 4.98361C7.32363 4.72525 6.67164 4.42075 6.00075 4.18085C5.62279 4.04244 5.33932 4.20853 5.32042 4.62375C5.29207 5.27887 5.30152 5.92477 5.28262 6.57989C5.28262 6.73675 5.28262 6.92129 5.19758 7.04124C3.00539 10.1323 4.70623 13.9246 8.56146 14.5059C8.6654 14.5244 8.77879 14.5336 8.86383 14.5428C8.70319 14.9581 8.55201 15.3733 8.37248 15.77C8.32523 15.8715 8.17405 15.9638 8.05121 16.0007C7.01181 16.3698 6.0858 16.0653 5.44326 15.1887C5.19758 14.8566 4.92356 14.5152 4.58339 14.2937C4.31882 14.1184 3.94085 14.0999 3.61013 14.0446C3.52509 14.0261 3.37391 14.1092 3.34556 14.1738C3.31721 14.2384 3.37391 14.4044 3.44005 14.4506C4.28102 14.9304 4.60229 15.7793 5.07474 16.5451C5.55665 17.3386 6.41651 17.4401 7.27638 17.4401C7.6071 17.4401 7.92837 17.394 8.32523 17.3571C8.32523 18.003 8.34413 18.612 8.31578 19.221C8.29688 19.6177 7.94727 19.8023 7.50316 19.6085C6.69054 19.2579 5.84957 18.9165 5.11254 18.4367C1.58803 16.1484 -0.112807 11.9408 0.803755 7.90858C1.71087 3.88558 5.07474 0.776064 9.23234 0.130169C14.4671 -0.69104 19.5319 2.51075 20.8642 7.49337C22.2059 12.4944 19.4563 17.717 14.5522 19.5162C13.7018 19.83 13.4655 19.6639 13.4655 18.7781C13.475 18.1783 13.475 17.5785 13.4844 16.9788C13.5033 16.1299 13.5033 15.2902 12.8513 14.5613Z" fill="#A3A8B8" /></svg>
                    </a>
                    <article>
                        <h5 className="large bold">GitHub</h5>
                        <p className="tiny">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nullam ridiculus et.</p>
                    </article>
                </section>
                <section className="social instagram">
                    <a className="not-link" href="https://www.instagram.com/streamlit.io" target="_blank">
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.82611 19.637C8.68561 19.6375 8.54507 19.6381 8.40451 19.6388C7.73077 19.6419 7.05655 19.6449 6.38357 19.6332C5.57165 19.619 4.75702 19.5933 3.96127 19.3885C2.58287 19.0358 1.50659 18.2478 0.791761 16.9477C0.411421 16.2535 0.206419 15.494 0.1201 14.7002C0.00283629 13.6378 0.00233275 12.5687 0.00182921 11.5008C0.00176817 11.3648 0.00170714 11.2289 0.00140196 11.093C-0.00128358 9.77016 -0.00128358 8.44729 0.0121899 7.12441C0.0202923 6.28237 0.0337811 5.43746 0.168654 4.60104C0.419508 3.07626 1.09927 1.8359 2.3428 0.979575C3.05491 0.490257 3.85068 0.205772 4.69227 0.137534C5.67685 0.0578835 6.66681 0.0237038 7.65408 0.00948261C9.09183 -0.00760724 10.5323 0.000937685 11.97 0.0151589C12.7927 0.0237038 13.6154 0.0407936 14.4274 0.211448C15.9218 0.524436 17.0952 1.32949 17.8558 2.74056C18.2658 3.50008 18.4682 4.33651 18.5383 5.20418C18.6354 6.39468 18.6342 7.58987 18.6329 8.78548L18.6327 9.1841C18.6327 10.413 18.6327 11.6392 18.6138 12.8682C18.6003 13.7188 18.5841 14.5751 18.3926 15.4115C17.9206 17.474 16.7229 18.8025 14.7754 19.3601C14.0902 19.5564 13.3862 19.6048 12.6794 19.619C12.2525 19.6276 11.8257 19.6351 11.3989 19.6419C10.9863 19.6485 10.5737 19.6546 10.1615 19.6605C9.88211 19.6646 9.60287 19.6687 9.32379 19.673V19.636C9.15796 19.636 8.99206 19.6364 8.82611 19.637ZM9.29681 17.9007V17.8637C9.45953 17.8637 9.62225 17.864 9.78497 17.8645L10.1925 17.8659C10.865 17.8683 11.5375 17.8707 12.2101 17.8609C12.8817 17.8523 13.5588 17.841 14.2197 17.6816C15.5711 17.3545 16.4208 16.4896 16.7472 15.0615C16.9225 14.2914 16.9303 13.5025 16.938 12.7182L16.9387 12.6463C16.9576 11.0332 16.9522 9.42306 16.9495 7.81002L16.9492 7.70217V7.70144C16.9468 6.78152 16.9444 5.85946 16.8146 4.94527C16.5907 3.355 15.6547 2.30245 14.1684 1.96676C13.4849 1.81283 12.7868 1.80239 12.0925 1.79201L11.9808 1.79037C10.9145 1.77407 9.84643 1.77492 8.77951 1.77578C8.54278 1.77596 8.30609 1.77615 8.06949 1.77615L7.83148 1.77602C6.84225 1.77523 5.85129 1.77444 4.86491 1.89559C4.27417 1.96676 3.7104 2.14315 3.21138 2.49874C2.448 3.04494 2.02449 3.82156 1.84917 4.76321C1.71429 5.48012 1.6981 6.20553 1.6954 6.92812C1.68732 9.00771 1.6981 11.0902 1.70889 13.1726C1.71159 13.7842 1.74127 14.3958 1.87074 14.9961C2.1324 16.2223 2.78787 17.0956 3.92351 17.5365C4.51425 17.7641 5.13196 17.8267 5.75238 17.8438C6.35205 17.8539 6.95312 17.8633 7.55453 17.8727L8.397 17.8859C8.69702 17.8907 8.99701 17.8956 9.29681 17.9007ZM14.0991 9.82156C14.1018 12.5868 11.9654 14.8541 9.37317 14.8769C6.71078 14.8996 4.52855 12.6266 4.53125 9.83297C4.53665 7.05355 6.66495 4.78902 9.28146 4.78615C11.9546 4.77767 14.0964 7.01937 14.0991 9.82156ZM9.31653 13.0988C11.024 13.1159 12.451 11.6081 12.424 9.75899C12.3997 8.00368 11.0024 6.55001 9.29495 6.55282C7.57937 6.55569 6.20907 8.02932 6.21176 9.87276C6.21716 11.6451 7.61984 13.1045 9.31653 13.0988ZM14.2928 3.39846C13.6859 3.39565 13.176 3.93044 13.1733 4.57052C13.1733 5.22201 13.6697 5.75686 14.2739 5.75686C14.9105 5.75967 15.4095 5.23336 15.4068 4.55917C15.4068 3.93044 14.8997 3.40133 14.2928 3.39846Z" fill="#A3A8B8" /></svg>
                    </a>
                    <article>
                        <h5 className="large bold">Instagram</h5>
                        <p className="tiny">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nullam ridiculus et.</p>
                    </article>
                </section>
            </section>
        </section>
    )
}