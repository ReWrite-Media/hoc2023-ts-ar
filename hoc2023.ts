//enums
enum FourDirectionArrows {
    //% blockIdentity="blocks.custom" enumval=986 block="سهم لأعلى باللون البرتقالي"
    //% jres alias=ARROW_UP_ORANGE
    ArrowUpOrange = 986,
    //% blockIdentity="blocks.custom" enumval=985 block="سهم لأسفل باللون الأرجواني"
    //% jres alias=ARROW_DOWN_MAGENTA
    ArrowDownMagenta = 985,
    //% blockIdentity="blocks.custom" enumval=984 block="سهم لليسار باللون الأزرق"
    //% jres alias=ARROW_RIGHT_YELLOW
    ArrowRightYellow = 984,
    //% blockIdentity="blocks.custom" enumval=983 block="سهم لليمين باللون الأصفر"
    //% jres alias=ARROW_LEFT_BLUE
    ArrowLeftBlue = 983
}

enum PrinceBadges {
    //% blockIdentity="blocks.custom" enumval=986 block="العدالة والشمولية"
    //% jres alias=FAIRNESS_INCLUSIVENESS
    FairnessInclusiveness = 986,
    //% blockIdentity="blocks.custom" enumval=985 block="الخصوصية والأمان"
    //% jres alias=PRIVACY_SECURITY
    PrivacySecurity = 985,
    //% blockIdentity="blocks.custom" enumval=984 block="الموثوقية والسلامة"
    //% jres alias=RELIABILITY_SAFETY
    ReliabilitySafety = 984,
    //% blockIdentity="blocks.custom" enumval=983 block="الشفافية والمساءلة"
    //% jres alias=TRANSPARENCE_ACCOUNTABILITY
    TransparencyAccountability = 983
}

enum UpDown {
    //% block="للأعلى"
    Up = SixDirection.Up,
    //% block="للاسفل"
    Down = SixDirection.Down
}

enum ForwardBackUpDown {
    //% block="إلى الأمام"
    Forward = SixDirection.Forward,
    //% block="خلف"
    Back = SixDirection.Back,
    //% block="للأعلى"
    Up = SixDirection.Up,
    //% block="للاسفل"
    Down = SixDirection.Down
}

enum Scene1_Scan {
    //% block="أفقيا"
    Horizontally = 1,
    //% block="ذكي"
    Smart = 4
}

enum Scene4_UserLevel {
    //% block="أي شخص"
    Anyone,
    //% block="مستخدم"
    User,
    //% block="مشرف"
    Admin
}

// global variables
const communicationsTimeout = 100;

//%  block="HOC 2023 Generics" weight=200 color=#005a68 icon="\uf186"
namespace hoc2023 {

    /**
     * Loop during lunch time
     */
    //% block="lوقت الغداء"
    export function scene1_LunchTime(): boolean {
        return true;
    }

    /**
     * Detect Student
     */
    //% block="`custom.studentFound` تم العثور على الطالب "
    export function scene1_DetectStudent(): boolean {
        return true;
    }

    /**
     * Serve Lunch
     */
    //% block="`custom.serveLunch` تقديم الغداء"
    export function scene1_ServeLunch(): void {
        player.execute("scoreboard players set .output global 3")
    }

    /**
     * Wait for next student
     */
    //% block="`custom.waitingClock` انتظر الطالب التالي"
    export function scene1_WaitStudent(): void {
        player.execute("scoreboard players set .output global 4")
    }
    /**
     * Move lawnmower to next row
     */
    //% block="`custom.lawnmowerNewRow` ابدأ بالصف التالي"
    export function scene2_LawnmowerNextRow(): void {
        pause()
        player.execute("scoreboard players set .output global 3")
        pause()
        player.execute("scoreboard players set .output global 4")
    }
    /**
     * Move lawnmower forward
     */
    //% block="`custom.lawnmowerForward` حرك جزازة العشب للأمام"
    export function scene2_LawnmowerMoveForward(): void {
        pause()
        player.execute("scoreboard players set .output global 3")
    }
    /**
     * Search for trash
     */
    //% block="ابحث عن النفايات"
    export function scene3_SearchForGarbage(): boolean {
        return true;
    }
    /**
     * Trash
     */
    //% block="نفاية"
    export function scene3_Garbage(): boolean {
        return true;
    }
    /**
     * Battery
     */
    //% block="بطارية"
    export function scene3_Battery(): number {
        return 0;
    }
    /**
     * Charging
     */
    //% block="يشحن"
    export function scene3_Charging(): boolean {
        return false;
    }
    /**
     * Pickup trash
     */
    //% block="التقط النفايات"
    export function scene3_PickupGarbage(): void {
        pause()
        player.execute("scoreboard players set .output global 1")
    }
    /**
     * Move trash
     */
    //% block="نقل النفايات"
    export function scene3_MoveGarbage(): void {
        pause()
        player.execute("scoreboard players set .output global 2")
    }
    /**
     * Drop trash
     */
    //% block="اسقط النفايات"
    export function scene3_DropGarbage(): void {
        pause()
        player.execute("scoreboard players set .output global 0")
    }
    /**
     * Find utility box
     */
    //% block="ابحث عن صندوق الأدوات"
    export function scene3_FindUtilityBox(): void {
        pause()
        player.execute("scoreboard players set .output global 0")
    }
    /**
     * Start charging
     */
    //% block="بدء الشحن"
    export function scene3_StartCharging(): void {
        pause()
        player.execute("scoreboard players set .output global 0")
    }
    /**
     * Stop Charging
     */
    //% block="ايقاف الشحن"
    export function scene3_StopCharging(): void {
        pause()
        player.execute("scoreboard players set .output global 0")
    }
    /**
     * Continue flight loop
     */
    //% block="واصل دورة الطيران"
    export function scene3_ContinueFlightLoop(): void {
        pause()
        player.execute("scoreboard players set .output global 7")
    }
    /**
     * Fly to dumpster
     */
    //% block="طر نحو الحاوية"
    export function scene3_TakeToDumpster(): void {
        pause()
        player.execute("scoreboard players set .output global 8")
    }
    /**
     * Release trash
     */
    //% block="اطلق النفايات"
    export function scene3_RecycleGarbage(): void {
        pause()
        player.execute("scoreboard players set .output global 9")
        pause()
        player.execute("scoreboard players set .output global 4")
        pause()
        player.execute("scoreboard players set .output global 5")
    }
    /**
     * Checks for human detection
     */
    //% block="تم رصد انسان"
    export function scene4_HumanDetected(): boolean {
        return true;
    }

    /**
    * Checks is user is authorized
    */
    //% block="المستخدم مصرح له"
    export function scene4_UserAuthorized(): boolean {
        return true;
    }

    /**
    * Return user permissions
    */
    //% block="صلاحيات المستخدم"
    export function scene4_UserPermissions(): boolean {
        return true;
    }

    /**
    * Check if door closed
    */
    //% block="الباب مغلق"
    export function scene4_DoorClosed(): boolean {
        return true;
    }

    /**
     * Check user permissions
     */
    //% block="تحقق من صلاحيات المستخدم"
    export function scene4_CheckUserPermissions(): void {
        pause()
        player.execute("scoreboard players set .output global 3")
    }

    /**
     * Enable log viewing
     */
    //% block="تمكين عرض السجل `custom.greenCheck`"
    export function scene4_EnableLogViewing(): void {
        pause()
        player.execute("scoreboard players set .output global 1")
        pause()
        player.execute("scoreboard players set .output global 4")
        pause()
        player.execute("scoreboard players set .output global 5")
        pause()
        player.execute("scoreboard players set .output global 6")
        pause()
        player.execute("scoreboard players set .output global 7")
    }

    /**
     * Disable log viewing
     */
    //% block="تعطيل عرض السجل `custom.redX`"
    export function scene4_DisableLogViewing(): void {
        pause()
        player.execute("scoreboard players set .output global 2")
        pause()
        player.execute("scoreboard players set .output global 4")
        pause()
        player.execute("scoreboard players set .output global 5")
        pause()
        player.execute("scoreboard players set .output global 6")
        pause()
        player.execute("scoreboard players set .output global 7")
    }

    /**
     * Log unauthorized event
     */
    //% block="`custom.redX` تسجيل حدث غير مصرح به"
    export function scene4_LogUnauthorizedEvent(): void {
        pause()
        player.execute("scoreboard players set .output global 0")
    }

    /**
     * Log authorized event
     */
    //% block="`custom.greenCheck` تسجيل حدث مصرح به"
    export function scene4_LogAuthorizedEvent(): void {
        pause()
        player.execute("scoreboard players set .output global 0")
    }

    /**
     * Lock door
     */
    //% block="قفل الباب"
    export function scene4_LockDoor(): void {
        pause()
        player.execute("scoreboard players set .output global 0")
    }

    /**
     * Unlock door
     */
    //% block="فتح الباب"
    export function scene4_UnlockDoor(): void {
        pause()
        player.execute("scoreboard players set .output global 0")
    }

    /**
     * Wait before locking
     */
    //% block="`custom.waitingClock` انتظر %num دقائق"
    export function scene4_WaitMinutes(num: number): void {
        pause()
        player.execute("scoreboard players set .output global 0")
    }

    //helper functions

    function pause(): void {
        loops.pause(communicationsTimeout)
    }

}

//%  block="HOC 2023 Objectives" weight=200 color=#9f8c1c icon="\uf186"
namespace hoc2023Objectives {
    /**
     * Agent Move Direction
     */
    //% block="`custom.agentMove` حرك الروبوت باتجاه %d"
    export function pillar_AgentMove(d: ForwardBackUpDown): void {
        agent.move(d, 1)
    }


    /**
     * Agent Place Block
     */
    //% block="`custom.place` الروبوت يضع `block.PinkWool` %d"
    export function pillar_AgentPlacePinkWoolBlock(d: UpDown): void {
        agent.setItem(PURPLE_WOOL, 1, 1)
        agent.setSlot(1)
        agent.place(d)
    }

    /**
     * Scan for student
     */
    //% block="`custom.scanning` مسح %scan_type"
    export function scene1_Scan(scan_type: Scene1_Scan): void {
        if (scan_type == Scene1_Scan.Smart) {
            player.execute("scoreboard players set .output global 2")
        } else {
            player.execute("scoreboard players set .output global 1")
        }

    }
    /**
     * Cut grass without checking
     */
    //% block="`custom.cutGrass` قطع العشب"
    export function scene2_GrassCut(): void {
        pause()
        player.execute("scoreboard players set .output global 1")
    }
    /**
     * Check for sprinkler before cutting
     */
    //% block="`custom.cutgrassNoSprinkler` إذا لم يوجد رشاش ماء، قص العشب"
    export function scene2_CheckSprinklerGrassCut(): void {
        pause()
        player.execute("scoreboard players set .output global 2")
    }
    /**
     * Move trash
     */
    //% block="نقل النفايات"
    export function scene3_MoveGarbage(): void {
        pause()
        player.execute("scoreboard players set .output global 2")
    }
    /**
     * Drop trash
     */
    //% block="اسقط النفايات"
    export function scene3_DropGarbage(): void {
        pause()
        player.execute("scoreboard players set .output global 0")
    }
    /**
     * Fly to dumpster
     */
    //% block="طر نحو الحاوية"
    export function scene3_TakeToDumpster(): void {
        pause()
        player.execute("scoreboard players set .output global 8")
    }
    /**
     * Release trash
     */
    //% block="اطلق النفايات"
    export function scene3_RecycleGarbage(): void {
        pause()
        player.execute("scoreboard players set .output global 9")
        pause()
        player.execute("scoreboard players set .output global 4")
        pause()
        player.execute("scoreboard players set .output global 5")
    }
    /**
    * User admin permissions
    */
    //% block="%permission"
    export function scene4_UserAdmin(permission: Scene4_UserLevel): boolean {
        if (permission == Scene4_UserLevel.Admin) {
            return false;
        } else {
            return true;
        }
    }
    function pause(): void {
        loops.pause(communicationsTimeout)
    }

}

//%  block="HOC 2023 Disabled" weight=200 color=#888888 icon="\uf186"
namespace hoc2023Disable {
    /**
     * Search for trash
     */
    //% block="ابحث عن النفايات"
    export function scene3_SearchForGarbage(): boolean {
        return true;
    }
    /**
     * Search for 101101
     */
    //% block="ابحث عن 101101"
    export function scene3_ObSearchForGarbage(): boolean {
        return true;
    }
    /**
     * Trash
     */
    //% block="النفايات"
    export function scene3_Garbage(): boolean {
        return true;
    }
    /**
     * 101101
     */
    //% block="101101"
    export function scene3_ObGarbage(): boolean {
        return true;
    }
    /**
     * Battery
     */
    //% block="بطارية"
    export function scene3_Battery(): number {
        return 0;
    }
    /**
     * Charging
     */
    //% block="يشحن"
    export function scene3_Charging(): boolean {
        return false;
    }
    /**
     * Pickup trash
     */
    //% block="التقط النفايات"
    export function scene3_PickupGarbage(): void {
        pause()
        player.execute("scoreboard players set .output global 1")
    }
    /**
     * Pickup 101101
     */
    //% block="101101 التقط"
    export function scene3_ObPickupGarbage(): void {
        pause()
        player.execute("scoreboard players set .output global 1")
    }
    /**
     * Move trash
     */
    //% block="نقل النفايات"
    export function scene3_MoveGarbage(): void {
        pause()
        player.execute("scoreboard players set .output global 2")
    }
    /**
     * Move 101101
     */
    //% block="101101 نقل"
    export function scene3_ObMoveGarbage(): void {
        pause()
        player.execute("scoreboard players set .output global 2")
    }
    /**
     * Drop trash
     */
    //% block="اسقط النفايات"
    export function scene3_DropGarbage(): void {
        pause()
        player.execute("scoreboard players set .output global 0")
    }
    /**
     * Drop 101101
     */
    //% block="101101 اسقط"
    export function scene3_ObDropGarbage(): void {
        pause()
        player.execute("scoreboard players set .output global 0")
    }
    /**
     * Find utility box
     */
    //% block="ابحث عن صندوق الأدوات"
    export function scene3_FindUtilityBox(): void {
        pause()
        player.execute("scoreboard players set .output global 0")
    }
    /**
     * Start charging
     */
    //% block="بدء الشحن"
    export function scene3_StartCharging(): void {
        pause()
        player.execute("scoreboard players set .output global 0")
    }
    /**
     * Stop Charging
     */
    //% block="ايقاف الشحن"
    export function scene3_StopCharging(): void {
        pause()
        player.execute("scoreboard players set .output global 0")
    }
    /**
     * Continue flight loop
     */
    //% block="واصل دورة الطيران"
    export function scene3_ContinueFlightLoop(): void {
        pause()
        player.execute("scoreboard players set .output global 7")
    }
    /**
     * Fly to dumpster
     */
    //% block="طر نحو الحاوية"
    export function scene3_TakeToDumpster(): void {
        pause()
        player.execute("scoreboard players set .output global 8")
    }
    /**
     * Fly to 0110101011
     */
    //% block="0110101011 طر نحو"
    export function scene3_ObTakeToDumpster(): void {
        pause()
        player.execute("scoreboard players set .output global 8")
    }
    /**
     * Release trash
     */
    //% block="اطلق النفايات"
    export function scene3_RecycleGarbage(): void {
        pause()
        player.execute("scoreboard players set .output global 9")
        pause()
        player.execute("scoreboard players set .output global 4")
        pause()
        player.execute("scoreboard players set .output global 5")
    }
    /**
     * 1001010 101101
     */
    //% block="1001010 101101"
    export function scene3_ObRecycleGarbage(): void {
        pause()
        player.execute("scoreboard players set .output global 9")
        pause()
        player.execute("scoreboard players set .output global 4")
        pause()
        player.execute("scoreboard players set .output global 5")
    }
    function pause(): void {
        loops.pause(communicationsTimeout)
    }
}

//%  block="HOC 2023 Red Agent" weight=200 color=#ad3a27 icon="\uf186"
namespace hoc2023RedAgent {
    /**
     * Move red Agent
     */
    //% block="`custom.redAgent` حرك الروبوت الأحمر نحو %d باستخدام %n"
    export function scene5_RedAgent(d: FourDirectionArrows, n: number): void {
        for (let i = 0; i < n; i++) {
            pause()
            switch (d) {
                case FourDirectionArrows.ArrowUpOrange:
                    player.execute("scoreboard players set .output global 11")
                    break;
                case FourDirectionArrows.ArrowDownMagenta:
                    player.execute("scoreboard players set .output global 12")
                    break;
                case FourDirectionArrows.ArrowRightYellow:
                    player.execute("scoreboard players set .output global 13")
                    break;
                case FourDirectionArrows.ArrowLeftBlue:
                    player.execute("scoreboard players set .output global 14")
                    break;
            }
        }
    }
    /**
     * Match red Agent
     */
    //% block="`custom.redAgent` تطابق الروبوت الأحمر %p"
    export function scene5_RedMatchAgent(p: PrinceBadges): void {
        pause()
        switch (p) {
            case PrinceBadges.FairnessInclusiveness:
                player.execute("scoreboard players set .output global 11")
                break;
            case PrinceBadges.PrivacySecurity:
                player.execute("scoreboard players set .output global 14")
                break;
            case PrinceBadges.ReliabilitySafety:
                player.execute("scoreboard players set .output global 12")
                break;
            case PrinceBadges.TransparencyAccountability:
                player.execute("scoreboard players set .output global 13")
                break;
        }
    }
    function pause(): void {
        loops.pause(communicationsTimeout)
    }
}

//%  block="HOC 2023 YellowAgent" weight=200 color=#b99b18 icon="\uf186"
namespace hoc2023YellowAgent {
    /**
     * Move yellow Agent
     */
    //% block="`custom.yellowAgent` حرك الروبوت الأصفر نحو %d باستخدام %n"
    export function scene5_YellowAgent(d: FourDirectionArrows, n: number): void {
        for (let i = 0; i < n; i++) {
            pause()
            switch (d) {
                case FourDirectionArrows.ArrowUpOrange:
                    player.execute("scoreboard players set .output global 21")
                    break;
                case FourDirectionArrows.ArrowDownMagenta:
                    player.execute("scoreboard players set .output global 22")
                    break;
                case FourDirectionArrows.ArrowRightYellow:
                    player.execute("scoreboard players set .output global 23")
                    break;
                case FourDirectionArrows.ArrowLeftBlue:
                    player.execute("scoreboard players set .output global 24")
                    break;
            }
        }
    }
    /**
     * Match yellow Agent
     */
    //% block="`custom.yellowAgent` يطابق الروبوت الأصفر %p"
    export function scene5_YellowMatchAgent(p: PrinceBadges): void {
        pause()
        switch (p) {
            case PrinceBadges.FairnessInclusiveness:
                player.execute("scoreboard players set .output global 22")
                break;
            case PrinceBadges.PrivacySecurity:
                player.execute("scoreboard players set .output global 24")
                break;
            case PrinceBadges.ReliabilitySafety:
                player.execute("scoreboard players set .output global 21")
                break;
            case PrinceBadges.TransparencyAccountability:
                player.execute("scoreboard players set .output global 23")
                break;
        }
    }
    function pause(): void {
        loops.pause(communicationsTimeout)
    }
}

//%  block="HOC 2023 BlueAgent" weight=200 color=#2e69c1 icon="\uf186"
namespace hoc2023BlueAgent {
    /**
     * Move blue Agent
     */
    //% block="`custom.blueAgent` حرك الروبوت الأزرق نحو %d باستخدام %n"
    export function scene5_BlueAgent(d: FourDirectionArrows, n: number): void {
        for (let i = 0; i < n; i++) {
            pause()
            switch (d) {
                case FourDirectionArrows.ArrowUpOrange:
                    player.execute("scoreboard players set .output global 31")
                    break;
                case FourDirectionArrows.ArrowDownMagenta:
                    player.execute("scoreboard players set .output global 32")
                    break;
                case FourDirectionArrows.ArrowRightYellow:
                    player.execute("scoreboard players set .output global 33")
                    break;
                case FourDirectionArrows.ArrowLeftBlue:
                    player.execute("scoreboard players set .output global 34")
                    break;
            }
        }
    }
    /**
     * Match blue Agent
     */
    //% block="`custom.blueAgent` يطابق الروبوت الأزرق %p"
    export function scene5_BlueMatchAgent(p: PrinceBadges): void {
        pause()
        switch (p) {
            case PrinceBadges.FairnessInclusiveness:
                player.execute("scoreboard players set .output global 32")
                break;
            case PrinceBadges.PrivacySecurity:
                player.execute("scoreboard players set .output global 34")
                break;
            case PrinceBadges.ReliabilitySafety:
                player.execute("scoreboard players set .output global 33")
                break;
            case PrinceBadges.TransparencyAccountability:
                player.execute("scoreboard players set .output global 31")
                break;
        }
    }
    function pause(): void {
        loops.pause(communicationsTimeout)
    }
}


//%  block="HOC 2023 Green Agent" weight=200 color=#357969 icon="\uf186"
namespace hoc2023GreenAgent {
    /**
     * Move green Agent
     */
    //% block="`custom.greenAgent` حرك الروبوت الأخضر نحو %d باستخدام %n"
    export function scene5_GreenAgent(d: FourDirectionArrows, n: number): void {
        for (let i = 0; i < n; i++) {
            pause()
            switch (d) {
                case FourDirectionArrows.ArrowUpOrange:
                    player.execute("scoreboard players set .output global 41")
                    break;
                case FourDirectionArrows.ArrowDownMagenta:
                    player.execute("scoreboard players set .output global 42")
                    break;
                case FourDirectionArrows.ArrowRightYellow:
                    player.execute("scoreboard players set .output global 43")
                    break;
                case FourDirectionArrows.ArrowLeftBlue:
                    player.execute("scoreboard players set .output global 44")
                    break;
            }
        }
    }
    /**
     * Match green Agent
     */
    //% block="`custom.greenAgent` يطابق الروبوت الأخضر %p"
    export function scene5_GreenMatchAgent(p: PrinceBadges): void {
        pause()
        switch (p) {
            case PrinceBadges.FairnessInclusiveness:
                player.execute("scoreboard players set .output global 42")
                break;
            case PrinceBadges.PrivacySecurity:
                player.execute("scoreboard players set .output global 41")
                break;
            case PrinceBadges.ReliabilitySafety:
                player.execute("scoreboard players set .output global 44")
                break;
            case PrinceBadges.TransparencyAccountability:
                player.execute("scoreboard players set .output global 43")
                break;
        }
    }
    function pause(): void {
        loops.pause(communicationsTimeout)
    }
}
