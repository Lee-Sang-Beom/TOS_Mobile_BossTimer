import { PropsWithChildren } from "react"

export default function Update() {

  interface Props {
    version: string
    date: string
    children: PropsWithChildren
  }

  const UpdateSection = (props: React.PropsWithChildren<Props>) => {
    return (
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">{props.version}</span>
          <span className="mt-1 text-gray-500 text-sm">{props.date}</span>
        </div>
        <div className="md:flex-grow">
          {props.children}
        </div>
      </div>
    )
  }
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
          <div className="-my-8 divide-y-2 divide-gray-100">

            {/* v1.2.0 업데이트 내용 */}
            <UpdateSection version="UPDATE v1.2.0" date="2022-11-18">
              <div>
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  {`타이머 알림 기능 추가`}
                </h2>
                <p className="leading-relaxed text-sm mb-1">
                  - 모든 필드 보스 이벤트마다 타이머의 남은 시간이 5분일 경우, 브라우저 우측 상단에 알림창이 발생하는 기능을 추가하였습니다.
                </p>
                <p className="leading-relaxed text-sm mb-1">
                  - 해당 알림의 지속시간은 타이머의 남은시간이 종료될 때까지 지속되며, 페이지 이동 시 사라집니다.
                </p>
              </div>
            </UpdateSection>

            {/* v1.1.1 업데이트 내용 */}
            <UpdateSection version="UPDATE v1.1.1" date="2022-11-18">
              <div>
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  {`에피소드 07, 에피소드 08 채널 박스 변경`}
                </h2>
                <p className="leading-relaxed text-sm mb-1">
                  - <span className="font-bold">{`Ep07, Ep08 에피소드의 채널 별로 `}</span>
                  필드 이벤트 시작 시간 및 타이머의 출력 영역을 분리하였습니다.
                </p>
                <p className="leading-relaxed text-sm mb-1">
                  {`- EP08 영역에서 즉시 시간 갱신이 이루어지지 않던 문제를 해결하였습니다.`}
                </p>
              </div>
            </UpdateSection>

            {/* v1.1.0 업데이트 내용 */}
            <UpdateSection version="UPDATE v1.1.0" date="2022-11-18">
              <div>
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  {`에피소드 07, 에피소드 08 채널 2 추가`}
                </h2>
                <p className="leading-relaxed text-sm mb-1">
                  - <span className="font-bold">{`에피소드 07, 08의 2개 채널(1,2)`}</span>
                  에 대한 필드 보스의 리젠 시간을 확인할 수 있습니다.
                </p>
                <p className="leading-relaxed text-sm mb-1">
                  {`- 채널 추가 과정에서, 에피소드 별 전체 보스 리젠 시간이 초기화되었습니다. (2022-11-18 12:00)`}
                </p>
              </div>
            </UpdateSection>

            {/* v1.0.0 업데이트 내용 */}
            <UpdateSection version="UPDATE v1.0.0" date="2022-11-18">
              <div>
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  타이머 서비스 시작
                </h2>
                <p className="leading-relaxed text-sm mb-1">
                  - <span className="font-bold">{`에피소드 01 ~ 08`}</span>
                  의 필드 보스의 리젠 시간을 확인할 수 있습니다.
                </p>
                <p className="leading-relaxed text-sm mb-1">
                  - 필드 이벤트 시간을 제외한 보스 별 리젠 시간을
                  <span className="font-bold">{` 갱신하기 `}</span>
                  버튼을 눌러 갱신할 수 있습니다.
                </p>
                <p className="leading-relaxed text-sm">
                  - 보스 처치 후 아무나 <span className="font-bold">{` 갱신하기 `}</span>버튼을 눌러 시간을 갱신하게 되면, 변경된 시간을 실시간으로 모든 유저가 변경된 시간을 페이지 새로고침 없이 확인할 수 있습니다.
                </p>
              </div>
            </UpdateSection>
          </div>
        </div>
      </section>
    </div>
  )
}
