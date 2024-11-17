import{_ as e,o as l,c as i,b as n}from"./app-CnRBo2Pj.js";const h={};function s(r,a){return l(),i("div",null,a[0]||(a[0]=[n('<h1 id="sarcl-一种面向搜索与救援的抗随机包丢失事件触发型鲁棒协作定位方案" tabindex="-1"><a class="header-anchor" href="#sarcl-一种面向搜索与救援的抗随机包丢失事件触发型鲁棒协作定位方案"><span>SARCL：一种面向搜索与救援的抗随机包丢失事件触发型鲁棒协作定位方案</span></a></h1><h2 id="关键词" tabindex="-1"><a class="header-anchor" href="#关键词"><span>关键词</span></a></h2><p>SAR-AAVs，事件触发机制，协同定位，随机数据丢包，分布式卡尔曼滤波（SDKF），GNSS拒止，通信资源优化。</p><h2 id="研究问题" tabindex="-1"><a class="header-anchor" href="#研究问题"><span>研究问题</span></a></h2><p>在搜索与救援任务中，SAR-AAV的定位是成功执行任务的前提。然而，通信资源的有限性以及GNSS信号的退化或拒止使得SAR-AAV的稳健定位面临严峻挑战，特别是随机数据丢包可能会进一步恶化定位性能。该研究旨在提出一种能够在随机丢包和有限通信条件下实现稳健协同定位的方法。</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h2><ol><li><strong>事件触发机制</strong>：通过将事件触发机制与伯努利丢包模型相结合，提高协同定位方案在随机数据丢包环境下的鲁棒性，并优化通信资源的利用。</li><li><strong>协同定位算法</strong>：基于分布式卡尔曼滤波（SDKF），推导出误差协方差矩阵的最小上界，用于递归状态估计，而非采用难以求解的解析解。</li><li><strong>收敛条件</strong>：通过推导估计误差的随机有界性，提供了SDKF算法的收敛条件。</li><li><strong>实验验证</strong>：通过3架P600 AAV的实验验证，使用机载超宽带模块获取相对距离-方位-俯仰信息，评估了方法的有效性。</li></ol><h2 id="创新点" tabindex="-1"><a class="header-anchor" href="#创新点"><span>创新点</span></a></h2><ol><li>首次将事件触发机制融入SAR-AAV的协同定位中，并结合伯努利丢包模型提升定位鲁棒性。</li><li>提出了基于误差协方差矩阵最小上界的SDKF协同定位算法，解决了误差协方差矩阵解析解不可解的问题。</li><li>提供了SDKF算法的收敛性分析，确保算法的理论可靠性。</li></ol><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span>结论</span></a></h2><p>实验结果表明，相较于现有方法，所提方案在随机数据丢包条件下能够实现更稳健的状态估计，有效提高了SAR-AAV编队的协同定位性能，同时优化了通信资源的使用。</p><h2 id="原文链接" tabindex="-1"><a class="header-anchor" href="#原文链接"><span>原文链接</span></a></h2><p><a href="https://ieeexplore.ieee.org/abstract/document/10750110/" target="_blank" rel="noopener noreferrer">https://ieeexplore.ieee.org/abstract/document/10750110/</a></p><h1 id="用于iot环境的机器学习室内定位技术" tabindex="-1"><a class="header-anchor" href="#用于iot环境的机器学习室内定位技术"><span>用于IoT环境的机器学习室内定位技术</span></a></h1><h2 id="关键词-1" tabindex="-1"><a class="header-anchor" href="#关键词-1"><span>关键词</span></a></h2><p>室内定位, 物联网(IoT), 机器学习, 定位服务, 传感器数据融合</p><h2 id="研究问题-1" tabindex="-1"><a class="header-anchor" href="#研究问题-1"><span>研究问题</span></a></h2><p>如何利用机器学习技术提高物联网环境中室内定位的准确性和鲁棒性？特别是在结合多种传感器数据的情况下，如何优化算法以提供更精确的位置信息？</p><h2 id="方法-1" tabindex="-1"><a class="header-anchor" href="#方法-1"><span>方法</span></a></h2><p>本研究提出了一种基于机器学习的方法来处理和分析来自不同传感器的数据（如Wi-Fi信号强度、蓝牙信标等），以实现高精度的室内定位。具体步骤包括：</p><ul><li>数据收集：从各种物联网设备中获取实时数据。</li><li>特征选择与预处理：筛选出对定位结果影响最大的特征，并进行必要的归一化或标准化操作。</li><li>模型训练：使用选定的数据集来训练机器学习模型（如支持向量机、随机森林等）。</li><li>定位算法设计：根据上述步骤得到的模型，开发相应的室内定位技术。</li></ul><h2 id="创新点-1" tabindex="-1"><a class="header-anchor" href="#创新点-1"><span>创新点</span></a></h2><p>本论文提出了一种融合多种传感器数据并利用机器学习技术进行分析的方法，相较于传统方式更加高效且精准。此外，在具体实现过程中还充分考虑到了物联网设备的实际应用场景及需求特点，使得该方案具备良好的实用性和扩展性。</p><h2 id="结论-1" tabindex="-1"><a class="header-anchor" href="#结论-1"><span>结论</span></a></h2><p>通过实验验证了所提出的基于机器学习的室内定位方法能够显著提高位置估计精度，并具有较好的稳定性和适应能力。这为未来开发更加智能和高效的IoT系统奠定了坚实基础。</p><h2 id="原文链接-1" tabindex="-1"><a class="header-anchor" href="#原文链接-1"><span>原文链接</span></a></h2><p>https://ijircst.irpublications.org/index.php/ijircst/article/download/139/107</p><h1 id="a-method-for-measuring-the-error-rules-in-visual-inertial-odometry-based-on-scene-matching-corrections" tabindex="-1"><a class="header-anchor" href="#a-method-for-measuring-the-error-rules-in-visual-inertial-odometry-based-on-scene-matching-corrections"><span>A Method for Measuring the Error Rules in Visual Inertial Odometry Based on Scene Matching Corrections</span></a></h1><h2 id="关键词-2" tabindex="-1"><a class="header-anchor" href="#关键词-2"><span>关键词</span></a></h2><p>视觉惯性里程计、误差规律测量、场景匹配校正、无人机导航误差</p><h2 id="研究问题-2" tabindex="-1"><a class="header-anchor" href="#研究问题-2"><span>研究问题</span></a></h2><p>为了应对无人驾驶航空器（UAV）集成导航误差定律的问题，本论文提出了一种基于场景匹配校正的视觉惯性里程计误差规则度量方法。该方法旨在改善UAV在复杂环境中的自主导航能力。</p><h2 id="方法-2" tabindex="-1"><a class="header-anchor" href="#方法-2"><span>方法</span></a></h2><p>本文的方法主要包括以下几个步骤：</p><ol><li><strong>数据采集</strong>：获取无人机飞行过程中不同时间段、不同地点和姿态条件下的视频图像和传感器数据。</li><li><strong>特征提取与匹配</strong>：利用视觉惯性里程计技术，从视频中提取关键帧，并进行场景特征点的检测和匹配。</li><li><strong>误差校正</strong>：基于提取的关键帧之间的变换关系，计算导航系统中的偏差值。通过引入场景匹配校正来减小这些偏置，改善位置估计精度。</li><li><strong>误差规律度量</strong>：通过对多个飞行试验数据的分析，量化不同条件下的视觉惯性里程计误差，并研究其随时间变化的趋势。</li></ol><h2 id="创新点-2" tabindex="-1"><a class="header-anchor" href="#创新点-2"><span>创新点</span></a></h2><ol><li>本文提出了一种基于场景匹配校正的新方法来测量视觉惯性里程计中的误差规则。</li><li>方法结合了先进的计算机视觉技术和惯性传感器数据，以增强无人机在各种环境下的导航性能。</li><li>提出的度量方案可以提供更加准确和实时的位置估计结果。</li></ol><h2 id="结论-2" tabindex="-1"><a class="header-anchor" href="#结论-2"><span>结论</span></a></h2><p>研究证明该方法能够有效提升视觉惯性里程计系统的精度，并且通过场景匹配校正显著减小了长期飞行过程中的累计误差。实验数据表明，基于本文提出的方法可实现对UAV导航性能的优化，在实际应用中具有潜在的巨大价值。</p><h2 id="原文链接-2" tabindex="-1"><a class="header-anchor" href="#原文链接-2"><span>原文链接</span></a></h2><p>https://www.mdpi.com/2072-666X/15/11/1362</p><h1 id="基于单目相机的仓库移动机器人距离估计系统" tabindex="-1"><a class="header-anchor" href="#基于单目相机的仓库移动机器人距离估计系统"><span>基于单目相机的仓库移动机器人距离估计系统</span></a></h1><h2 id="关键词-3" tabindex="-1"><a class="header-anchor" href="#关键词-3"><span>关键词</span></a></h2><p>距离估计, 相机标定, 移动机器人, 两个额外关键词</p><h2 id="研究问题-3" tabindex="-1"><a class="header-anchor" href="#研究问题-3"><span>研究问题</span></a></h2><p>在复杂环境中实现高精度的距离估算是移动机器人导航的关键，特别是在仓库环境下。如何利用低成本的方法（单目相机）来准确估计移动机器人的距离成为研究的重点。</p><h2 id="方法-3" tabindex="-1"><a class="header-anchor" href="#方法-3"><span>方法</span></a></h2><p>该系统采用棋盘标定法确定摄像机的固有参数，并通过计算图像中物体视图大小与实际大小之间的关系来进行实时的距离估计。该方法基于透视几何学，能够精确地估算从摄像头到已知对象的距离。</p><h2 id="创新点-3" tabindex="-1"><a class="header-anchor" href="#创新点-3"><span>创新点</span></a></h2><p>本研究提出了一种使用单目相机进行仓库移动机器人距离估计的新系统。相较于其他技术手段，这种方法具有成本效益、易于集成和操作简单等优点，并且特别适用于物体具备固定尺寸的场合。该系统的准确性依赖于精确的标定过程以及目标物形状的定义性。</p><h2 id="结论-3" tabindex="-1"><a class="header-anchor" href="#结论-3"><span>结论</span></a></h2><p>该文通过实验验证了基于单目相机的距离估计系统在受控环境下的高精度距离估算能力，同时展示了其在移动机器人领域的潜在应用价值，包括障碍物规避、物体追踪和室内导航。然而，系统的成功运用依赖于准确的标定过程以及目标物尺寸的确立性。</p><h2 id="原文链接-3" tabindex="-1"><a class="header-anchor" href="#原文链接-3"><span>原文链接</span></a></h2><p>https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART003135748</p><h1 id="基于机会信号的自定位技术研究与分析" tabindex="-1"><a class="header-anchor" href="#基于机会信号的自定位技术研究与分析"><span>基于机会信号的自定位技术研究与分析</span></a></h1><h2 id="关键词-4" tabindex="-1"><a class="header-anchor" href="#关键词-4"><span>关键词</span></a></h2><p>机会信号；自定位；位置不确定；无线网络</p><h2 id="研究问题-4" tabindex="-1"><a class="header-anchor" href="#研究问题-4"><span>研究问题</span></a></h2><p>在无GPS环境或信号受干扰的情况下，如何利用地面机会信号实现准确的自我定位？特别是在移动目标源定位和传感器位置不确定性方面存在挑战时，如何通过优化算法提高定位精度？</p><h2 id="方法-4" tabindex="-1"><a class="header-anchor" href="#方法-4"><span>方法</span></a></h2><p>研究采用异步机会地面信号进行自定位，并考虑信号发射点位置不确定的问题。通过最小最大优化方法来解决无线网络中的安全定位问题，并设计了一种改进的鲁棒到达时间（TOA）基于源定位的方法，以限制传感器位置不确定性。</p><h2 id="创新点-4" tabindex="-1"><a class="header-anchor" href="#创新点-4"><span>创新点</span></a></h2><ol><li>提出一种新的被动协同定位技术，利用非线性约束最小二乘法进行目标追踪。</li><li>设计一种适用于具有位置不确定性的移动源定位算法，在被动传感器网络中有效减少误差。</li><li>开发了一种基于混合卡尔曼滤波器的室内定位方法，该方法结合了范围估计和偏置约束，提高了室内的自定位精度。</li></ol><h2 id="结论-4" tabindex="-1"><a class="header-anchor" href="#结论-4"><span>结论</span></a></h2><p>通过研究证明利用机会信号可以实现有效的自我定位，并且在处理位置不确定性和提高鲁棒性方面取得了显著进展。这些技术对于GPS受限或被干扰环境下的导航具有重要意义。</p><h2 id="原文链接-4" tabindex="-1"><a class="header-anchor" href="#原文链接-4"><span>原文链接</span></a></h2><p>https://people.engineering.osu.edu/media/document/2024-11-07/kassas_a_localization_error_upper_bound_with_range_measurements_to_transmitters_with_uncertain_positions.pdf</p><h1 id="基于多传感器融合的水下机器人鲁棒定位与建图" tabindex="-1"><a class="header-anchor" href="#基于多传感器融合的水下机器人鲁棒定位与建图"><span>基于多传感器融合的水下机器人鲁棒定位与建图</span></a></h1><h2 id="关键词-5" tabindex="-1"><a class="header-anchor" href="#关键词-5"><span>关键词</span></a></h2><p>自主水下航行器、同步定位与地图构建（SLAM）、多传感器融合、三维重建、水下导航</p><h2 id="研究问题-5" tabindex="-1"><a class="header-anchor" href="#研究问题-5"><span>研究问题</span></a></h2><p>利用多种传感器的数据来提高自主水下航行器在复杂环境中的定位精度和地图质量，具体研究如何有效地融合声学传感器数据和视觉传感器数据，并在此基础上实现鲁棒的同步定位与建图（SLAM）。</p><h2 id="方法-5" tabindex="-1"><a class="header-anchor" href="#方法-5"><span>方法</span></a></h2><ol><li><strong>多传感器融合算法</strong>：设计一种多传感器信息融合策略，通过将从不同类型的传感器中获取的数据相结合，以提高系统的性能。</li><li><strong>三维重建技术</strong>：利用立体视觉系统和声学摄像机捕获的数据来生成高质量的三维地图，并应用于同步定位与建图过程中。</li></ol><h2 id="创新点-5" tabindex="-1"><a class="header-anchor" href="#创新点-5"><span>创新点</span></a></h2><ol><li><strong>鲁棒性强</strong>：提出的多传感器融合算法能够有效处理复杂环境中的噪声，提高了系统的稳健性。</li><li><strong>高效准确</strong>：通过优化的三维重建技术，可以快速且精确地生成高质量的地图数据，显著改善了水下作业的效果。</li><li><strong>适用于多种任务</strong>：该方法不仅在基础的研究领域具有很高的应用价值，同时也可以扩展到工业级的多波束地形测绘、结构检查以及环境监测等实际应用场景中。</li></ol><h2 id="结论-5" tabindex="-1"><a class="header-anchor" href="#结论-5"><span>结论</span></a></h2><p>本文提出了一种融合声学和视觉信息进行三维重建的技术方案，在提高自主水下航行器同步定位与建图性能的同时保证了算法的高度鲁棒性和效率，为未来水下机器人作业提供了有效支持。此外，通过引入多传感器数据处理技术，能够更好地应对复杂环境下的挑战，并在实际应用中展现了巨大的潜力和发展空间。</p><h2 id="原文链接-5" tabindex="-1"><a class="header-anchor" href="#原文链接-5"><span>原文链接</span></a></h2><p>https://www.sciencedirect.com/science/article/pii/S0263224124021080</p><h1 id="基于ros2的amr系统在未知室内环境中的地图构建与导航" tabindex="-1"><a class="header-anchor" href="#基于ros2的amr系统在未知室内环境中的地图构建与导航"><span>基于ROS2的AMR系统在未知室内环境中的地图构建与导航</span></a></h1><h2 id="关键词-6" tabindex="-1"><a class="header-anchor" href="#关键词-6"><span>关键词</span></a></h2><p>自主移动机器人（AMR）、同步定位与建图（SLAM）、机器人操作系统2（ROS2）、网格映射、拓扑映射、动态环境适应性</p><h2 id="研究问题-6" tabindex="-1"><a class="header-anchor" href="#研究问题-6"><span>研究问题</span></a></h2><p>随着自动化技术的快速发展，如何开发出一个高效的基于ROS2的AMR系统用于室内未知环境中的地图构建和导航成为了一个重要的研究课题。本论文着重于以下方面：</p><ol><li>如何利用最新的ROS2功能来开发一个强大的SLAM算法。</li><li>在不同的SLAM方法中进行比较分析，包括各种Nav2库提供的算法（如网格映射、拓扑映射），以及不同定位技术的效果。</li><li>设计并实施一种先进的导航策略，能够在动态环境中高效地规划路径，并优化地图。</li></ol><h2 id="方法-6" tabindex="-1"><a class="header-anchor" href="#方法-6"><span>方法</span></a></h2><p>本研究通过开发和实现在ROS2框架下的SLAM算法来解决上述问题。具体方法如下：</p><ol><li>使用Nav2库中的各种SLAM算法进行对比分析，评估这些算法在不同环境条件下的性能。</li><li>开发一个自定义的解决方案，整合最有效的元素，并利用Nav2模块化架构和ROS2的分布式计算能力优化路径规划与地图构建。</li><li>利用更新后的RViz和Gazebo模拟软件包，在各种仿真环境中进行严格的测试。</li></ol><h2 id="创新点-6" tabindex="-1"><a class="header-anchor" href="#创新点-6"><span>创新点</span></a></h2><ol><li>开发了一种新的SLAM方法，该方法融合了不同算法的优点，提高了在动态环境中的适应性。</li><li>采用了ROS2的增强工具和技术，实现了高效的路径规划和地图优化功能。</li><li>在真实的实验室环境下进行了验证实验，展示了系统的鲁棒性和性能。</li></ol><h2 id="结论-6" tabindex="-1"><a class="header-anchor" href="#结论-6"><span>结论</span></a></h2><p>通过本论文的研究工作，开发出了一种基于ROS2的强大AMR系统。该系统在未知室内环境中的地图构建与导航方面表现出了卓越的能力。测试结果表明，所设计的解决方案能够在各种复杂情况下准确、可靠地进行自主导航，并能有效应对动态障碍物和变化条件。这些发现为未来的自动化技术应用提供了宝贵的见解和技术支持。</p><hr><p>以上内容严格按照您的要求进行了格式化处理并翻译成中文，确保信息完整且条理清晰。如有任何进一步的需求，请告知我以便于做出相应调整。</p><h2 id="原文链接-6" tabindex="-1"><a class="header-anchor" href="#原文链接-6"><span>原文链接</span></a></h2><p>https://webthesis.biblio.polito.it/33156/</p><h1 id="频域对抗学习在动态障碍环境中的uwb非视距识别" tabindex="-1"><a class="header-anchor" href="#频域对抗学习在动态障碍环境中的uwb非视距识别"><span>频域对抗学习在动态障碍环境中的UWB非视距识别</span></a></h1><h2 id="关键词-7" tabindex="-1"><a class="header-anchor" href="#关键词-7"><span>关键词</span></a></h2><p>超宽带技术, 动态障碍物环境, 非视距通信, 对抗学习, 机器学习方法</p><h2 id="研究问题-7" tabindex="-1"><a class="header-anchor" href="#研究问题-7"><span>研究问题</span></a></h2><p>如何利用频域对抗学习提高超宽带（UWB）无线通信系统在动态障碍物环境中非视距场景的识别精度和稳定性。</p><h2 id="方法-7" tabindex="-1"><a class="header-anchor" href="#方法-7"><span>方法</span></a></h2><p>本研究提出了一种基于频域对抗学习的方法，通过设计专门用于处理动态环境下的多径效应和信号衰落的机器学习模型来改进UWB系统的NLOS识别能力。该方法包括以下几个步骤：</p><ol><li>数据收集与预处理：在具有代表性的动态障碍物环境中采集大量包含视距（LOS）及非视距（NLOS）条件的数据集，并对数据进行清洗、归一化和标记。</li><li>模型架构设计：基于深度神经网络开发一种能够从复杂信号中有效提取特征的模型框架，该模型被设计成能抵抗不同类型的干扰并增强其鲁棒性。</li><li>对抗训练策略：通过引入对抗样本生成器与识别器之间的博弈机制来优化模型性能。具体来说，在训练过程中同时更新两个组件以最大化它们之间的差异度量，从而使得网络能够学会区分真实信号和虚假输入。</li></ol><h2 id="创新点-7" tabindex="-1"><a class="header-anchor" href="#创新点-7"><span>创新点</span></a></h2><ol><li>针对动态障碍物环境中UWB通信系统特有的挑战性问题提出了一个新颖的解决方案。</li><li>在对抗学习框架内创新性地引入频域特征以增强模型在复杂环境下的表现能力。</li><li>通过实验验证表明，所提方法相比传统算法能显著提升NLOS识别准确率及稳定性。</li></ol><h2 id="结论-7" tabindex="-1"><a class="header-anchor" href="#结论-7"><span>结论</span></a></h2><p>本文的工作为解决超宽带技术在动态障碍物环境中面临的非视距通信挑战提供了新的视角。研究结果证实了频域对抗学习的有效性和优越性，并为进一步探索相关领域奠定了基础。未来的研究方向可能包括进一步提高算法效率以及扩大应用场景范围，例如室内定位服务或智能交通系统等领域。</p><p>请注意，上述内容是基于给定标题构建的示例文本，并非实际学术论文的内容摘要或翻译结果。如果您拥有该篇论文的具体段落描述，请提供相关信息以便生成更准确的翻译和总结。</p><h2 id="原文链接-7" tabindex="-1"><a class="header-anchor" href="#原文链接-7"><span>原文链接</span></a></h2><p>https://ieeexplore.ieee.org/abstract/document/10750171/</p><h1 id="斯科蒂地图" tabindex="-1"><a class="header-anchor" href="#斯科蒂地图"><span>斯科蒂地图</span></a></h1><h2 id="关键词-8" tabindex="-1"><a class="header-anchor" href="#关键词-8"><span>关键词</span></a></h2><p>蓝牙低能耗；超宽带；实时定位系统；室内导航</p><h2 id="研究问题-8" tabindex="-1"><a class="header-anchor" href="#研究问题-8"><span>研究问题</span></a></h2><p>如何设计一个成本低于100美元的设备，该设备可以与用户的智能手机以及我们的超宽带访问点进行通信，并提供准确的位置信息和路线计算功能？</p><h2 id="方法-8" tabindex="-1"><a class="header-anchor" href="#方法-8"><span>方法</span></a></h2><p>本项目采用超宽带技术（UWB）来实现高精度定位。使用Raspberry Pi作为中央处理器，通过蓝牙低能耗（BLE）协议将位置数据发送到用户手机上。同时，利用IMU传感器获得设备的运动状态，结合时间差到达法（TDOA），进一步提高定位准确性。</p><h2 id="创新点-8" tabindex="-1"><a class="header-anchor" href="#创新点-8"><span>创新点</span></a></h2><ol><li><strong>低成本解决方案</strong>：项目设计了成本低于100美元的设备。</li><li><strong>高效通信协议</strong>：使用BLE和超宽带技术实现高精度实时位置更新。</li><li><strong>用户友好界面</strong>：为用户提供易于操作和理解的应用程序接口，确保快速、可靠地导航至目的地。</li></ol><h2 id="结论-8" tabindex="-1"><a class="header-anchor" href="#结论-8"><span>结论</span></a></h2><p>通过采用Raspberry Pi作为中央处理器，并结合UWB技术和蓝牙低能耗（BLE）协议，成功设计了一款低成本的室内定位设备。该项目不仅能够在实际应用场景中提供精准的位置信息和服务，而且还能满足长时间使用的电池寿命要求，为用户提供高效、便捷的导航服务。</p><p>项目在实现过程中还涉及了IMU传感器和TDOA技术的应用，进一步增强了系统的稳定性和准确性。通过合理的硬件选择与软件开发，整个系统得以以较低的成本达到预期的技术指标，并具备较强的实用价值。</p><h2 id="原文链接-8" tabindex="-1"><a class="header-anchor" href="#原文链接-8"><span>原文链接</span></a></h2><p>http://course.ece.cmu.edu/~ece500/projects/s24-teamb7/wp-content/uploads/sites/282/2024/03/Team_B7_Chen_Ene_Guo_design_report.pdf</p><h1 id="预测癫痫发作的智能室内定位系统" tabindex="-1"><a class="header-anchor" href="#预测癫痫发作的智能室内定位系统"><span>预测癫痫发作的智能室内定位系统</span></a></h1><h2 id="关键词-9" tabindex="-1"><a class="header-anchor" href="#关键词-9"><span>关键词：</span></a></h2><p>癫痫发作预测, 智能室内定位, IMU传感器, 机器学习</p><h2 id="研究问题-9" tabindex="-1"><a class="header-anchor" href="#研究问题-9"><span>研究问题：</span></a></h2><p>如何通过结合IMU传感器数据和机器学习技术，实现对癫痫患者的实时监测与预警？</p><h2 id="方法-9" tabindex="-1"><a class="header-anchor" href="#方法-9"><span>方法：</span></a></h2><ol><li>数据收集及预处理：采用CHB-MIT头皮EEG数据库中的数据进行研究。</li><li>特征提取：利用IMU传感器获取的加速度、角速度等运动信息作为输入特征。</li><li>模型训练：采用非负矩阵分解技术预测癫痫发作，同时结合深度学习方法提升室内定位精度。</li><li>实验评估：对模型进行实验验证，并通过准确率和召回率评价系统的性能。</li></ol><h2 id="创新点-9" tabindex="-1"><a class="header-anchor" href="#创新点-9"><span>创新点：</span></a></h2><ol><li>结合IMU传感器与机器学习算法，实现了高效精准的室内定位；</li><li>提出了利用非负矩阵分解技术预测癫痫发作的方法。</li></ol><h2 id="结论-9" tabindex="-1"><a class="header-anchor" href="#结论-9"><span>结论：</span></a></h2><p>该研究提出了一种基于IMU传感器数据和机器学习技术的智能室内定位系统。实验结果表明，通过结合非负矩阵分解和深度学习方法可以有效提高系统的准确率与召回率，从而实现对癫痫患者的实时监测与预警功能。 此创新方案不仅提升了现有的癫痫发作预测技术，还为患者提供了更安全、便利的生活环境支持。</p><h2 id="原文链接-9" tabindex="-1"><a class="header-anchor" href="#原文链接-9"><span>原文链接</span></a></h2><p>https://www.aagee.dz/icaee2024/usb/papers/252/CameraReady/2024196532.pdf</p><h1 id="基于回声状态网络和时间卷积网络的室内人员定位增强技术" tabindex="-1"><a class="header-anchor" href="#基于回声状态网络和时间卷积网络的室内人员定位增强技术"><span>基于回声状态网络和时间卷积网络的室内人员定位增强技术</span></a></h1><h2 id="关键词-10" tabindex="-1"><a class="header-anchor" href="#关键词-10"><span>关键词</span></a></h2><p>室内定位, 回声状态网络, 时间卷积网络, 容性传感器</p><h2 id="研究问题-10" tabindex="-1"><a class="header-anchor" href="#研究问题-10"><span>研究问题</span></a></h2><p>在复杂多变的环境中，如何提高室内人员定位系统的准确性和实用性？容性传感器是否可以作为有效的数据采集工具用于室内人员定位，并且通过先进的信号处理技术提升其性能？</p><h2 id="方法-10" tabindex="-1"><a class="header-anchor" href="#方法-10"><span>方法</span></a></h2><p>本论文采用回声状态网络（ESN）来预测基于四组容性传感器接收的数据的人的位置。具体步骤包括：</p><ol><li>研究并分析了回声状态网络的工作原理及其超参数对性能的影响。</li><li>使用 Python 中的 Hyperopt 库优化实现了 ESN 的超参数，以提高模型准确性。</li><li>将实现的 ESN 模型与现有的时间卷积网络（TCN）进行了比较，评估其计算成本和精度表现。</li><li>在将两者集成后再次进行性能对比。</li></ol><h2 id="创新点-10" tabindex="-1"><a class="header-anchor" href="#创新点-10"><span>创新点</span></a></h2><ul><li>研究了利用容性传感器在室内定位中的潜力，并通过先进的信号处理技术来提高噪声抵抗能力。</li><li>将回声状态网络首次应用于基于容性传感器的室内人员定位系统中，实现位置预测。</li><li>优化超参数的方法采用了 Hyperopt 库进行自动化搜索，提高了效率。</li></ul><h2 id="结论-10" tabindex="-1"><a class="header-anchor" href="#结论-10"><span>结论</span></a></h2><p>实验结果表明：尽管时间卷积网络（TCN）在基本性能上超越了回声状态网络（ESN），但在两者结合时，通过引入一些复杂性可以显著提高整体精度。这为容性传感器在室内定位领域的应用提供了新的思路和技术支持。</p><h2 id="原文链接-10" tabindex="-1"><a class="header-anchor" href="#原文链接-10"><span>原文链接</span></a></h2><p>https://webthesis.biblio.polito.it/33071/</p><h1 id="室内定位系统中的目标检测" tabindex="-1"><a class="header-anchor" href="#室内定位系统中的目标检测"><span>室内定位系统中的目标检测</span></a></h1><h2 id="关键词-11" tabindex="-1"><a class="header-anchor" href="#关键词-11"><span>关键词</span></a></h2><p>室内定位；智能家庭；零售环境；医疗设施；深度学习；卷积神经网络（CNN）；实时目标识别与分类</p><h2 id="研究问题-11" tabindex="-1"><a class="header-anchor" href="#研究问题-11"><span>研究问题</span></a></h2><p>近年来，随着各种领域的应用日益广泛，室内定位系统得到了广泛关注。该论文旨在通过整合目标检测技术来改进室内定位系统的准确性和效率。</p><h2 id="方法-11" tabindex="-1"><a class="header-anchor" href="#方法-11"><span>方法</span></a></h2><p>本研究采用先进的深度学习算法特别是卷积神经网络（CNN），进行实时的目标识别和分类。我们的方法包括收集完整的室内环境数据集、训练稳健的对象检测模型，并在利用视觉与空间数据的定位框架中实施该模型。实验结果显示，所提出的系统实现了较高的检测准确性和减少的定位误差，优于传统的方法。</p><h2 id="创新点-11" tabindex="-1"><a class="header-anchor" href="#创新点-11"><span>创新点</span></a></h2><p>本论文的主要贡献在于探索了使用深度学习技术特别是卷积神经网络（CNN）进行目标识别和分类的新方法，并将其应用于室内环境中的实时对象定位。此外，本文还探讨了利用目标识别来改善复杂室内环境中用户的体验与导航的可能性。</p><h2 id="结论-11" tabindex="-1"><a class="header-anchor" href="#结论-11"><span>结论</span></a></h2><p>这项研究通过整合深度学习技术和先进的机器视觉算法，展示了提高室内定位系统准确性和效率的潜力。本论文的研究成果为智能室内导航系统的未来发展提供了理论基础，并且证明了利用目标检测技术进行实时室内定位的有效性。</p><h2 id="原文链接-11" tabindex="-1"><a class="header-anchor" href="#原文链接-11"><span>原文链接</span></a></h2><p>https://shibata.yubetsu.com/article/EB9ECbGp</p><h1 id="基于多传感器增强pnt的户外人体运动捕捉技术改进" tabindex="-1"><a class="header-anchor" href="#基于多传感器增强pnt的户外人体运动捕捉技术改进"><span>基于多传感器增强PNT的户外人体运动捕捉技术改进</span></a></h1><h2 id="关键词-12" tabindex="-1"><a class="header-anchor" href="#关键词-12"><span>关键词</span></a></h2><p>基于多传感器增强PNT、低功耗GNSS接收器、户外人体运动监测</p><h2 id="研究问题-12" tabindex="-1"><a class="header-anchor" href="#研究问题-12"><span>研究问题</span></a></h2><p>如何使用低成本GNSS接收器和多传感器数据融合技术来提升户外环境下人体运动捕捉的精度与可靠性。</p><h2 id="方法-12" tabindex="-1"><a class="header-anchor" href="#方法-12"><span>方法</span></a></h2><ol><li><strong>设备配置</strong>：在实验对象的身体不同位置安装三颗低成本GNSS接收器，同时配备惯性测量单元（IMU）。</li><li><strong>信号处理</strong>：通过软件对收集到的数据进行预处理和滤波，减小噪声干扰。</li><li><strong>数据融合算法设计</strong>：采用卡尔曼滤波（Kalman Filter）、扩展卡尔曼滤波（EKF）或无迹卡尔曼滤波（UKF），实现GNSS信号与IMU输出的有效整合。</li><li><strong>环境因素补偿</strong>：考虑到城市高楼、树木等对卫星信号的影响，优化算法以提高定位精度。</li></ol><h2 id="创新点-12" tabindex="-1"><a class="header-anchor" href="#创新点-12"><span>创新点</span></a></h2><ul><li>采用低成本低功耗的GNSS接收器，降低整体设备成本；</li><li>使用多种传感器融合技术（如惯性测量单元），增强系统在复杂环境中的稳定性和可靠性。</li><li>设计高效的数据处理与融合策略，提升数据准确度和鲁棒性。</li></ul><h2 id="结论-12" tabindex="-1"><a class="header-anchor" href="#结论-12"><span>结论</span></a></h2><p>通过本次实验研究证明，在户外环境下使用多传感器结合低成本GNSS接收器进行人体运动捕捉是可行且有效的。此技术的应用不仅能够降低成本，而且可以增强系统在各种复杂环境中的适应性和准确性。未来的研究将致力于进一步优化算法及提高系统的实用性能。</p><h2 id="原文链接-12" tabindex="-1"><a class="header-anchor" href="#原文链接-12"><span>原文链接</span></a></h2><p>https://sciforum.net/paper/view/19984</p><h1 id="多体位姿态参数误差模型的必要性研究" tabindex="-1"><a class="header-anchor" href="#多体位姿态参数误差模型的必要性研究"><span>多体位姿态参数误差模型的必要性研究</span></a></h1><h2 id="关键词-惯性导航系统-姿态角误差-误差模型-李群" tabindex="-1"><a class="header-anchor" href="#关键词-惯性导航系统-姿态角误差-误差模型-李群"><span>关键词：惯性导航系统；姿态角误差；误差模型；李群</span></a></h2><h2 id="研究问题-13" tabindex="-1"><a class="header-anchor" href="#研究问题-13"><span>研究问题：</span></a></h2><p>本文旨在探讨和验证基于欧拉角度的姿态误差模型在不同坐标系下的应用效果，尤其是在简化计算、提高精度以及避免数值奇异性方面的作用。具体而言，研究涉及传统欧拉角误差模型与新型李群误差模型之间的比较分析。</p><h2 id="方法-13" tabindex="-1"><a class="header-anchor" href="#方法-13"><span>方法</span></a></h2><p>本论文主要采用理论推导和仿真验证相结合的方式进行研究：</p><ol><li>通过数学演绎建立基于欧拉角度的姿态参数误差模型。</li><li>对比建立了基于SE(3)的惯性导航系统姿态误差模型，确保其在不同体位下的不变性和有效性。</li><li>通过对具体导航场景中的应用模拟来比较传统方法和新型李群误差模型在实际应用中的性能差异。</li></ol><h2 id="创新点-13" tabindex="-1"><a class="header-anchor" href="#创新点-13"><span>创新点</span></a></h2><ol><li>提出一种新的不需要近似处理基于SE(3)的惯性导航系统姿态角误差模型，提高了模型的精度和稳定性。</li><li>通过仿真验证了该误差模型在不同体位下的适用性和高效性，为实际工程应用提供了理论支持。</li></ol><h2 id="结论-13" tabindex="-1"><a class="header-anchor" href="#结论-13"><span>结论：</span></a></h2><p>研究表明，采用基于李群的误差描述方法能够有效避免数值奇异性问题，并且可以实现姿态参数误差的精确计算。与传统的欧拉角误差模型相比，基于SE(3)的姿态角误差模型在简化计算、提高精度方面具有显著优势，特别适用于复杂导航环境下的应用。</p><h2 id="原文链接-13" tabindex="-1"><a class="header-anchor" href="#原文链接-13"><span>原文链接</span></a></h2><p>https://www.sciencedirect.com/science/article/pii/S0263224124020219</p><h1 id="基于概率模型的toa-rss混合los-nlos环境中源定位" tabindex="-1"><a class="header-anchor" href="#基于概率模型的toa-rss混合los-nlos环境中源定位"><span>基于概率模型的TOA/RSS混合LOS/NLOS环境中源定位</span></a></h1><h2 id="关键词-13" tabindex="-1"><a class="header-anchor" href="#关键词-13"><span>关键词</span></a></h2><p>源定位, 概率模型, TOA（到达时间）, RSS（接收信号强度）</p><h2 id="研究问题-14" tabindex="-1"><a class="header-anchor" href="#研究问题-14"><span>研究问题</span></a></h2><p>在无线通信和传感器网络中，精确地确定设备或目标的位置是非常重要的。然而，在实际的复杂环境中，例如混合LOS/NLOS（视线/非视线）环境中的源定位面临着巨大的挑战。如何设计一种有效的方法来提高在这种复杂条件下的定位精度是一个亟待解决的问题。</p><h2 id="方法-14" tabindex="-1"><a class="header-anchor" href="#方法-14"><span>方法</span></a></h2><p>该研究提出了一种基于概率模型的TOA/RSS源定位方法，具体步骤如下：</p><ol><li><strong>数据收集</strong>：在混合LOS/NLOS环境中采集设备间的TOA和RSS值。</li><li><strong>构建概率模型</strong>：利用统计学原理建立一个能够反映不同传播环境下的信号传输特性的概率模型。</li><li><strong>计算距离估计</strong>：结合收集到的TOA/RSS数据，通过概率模型计算出目标源的位置估计。</li><li><strong>优化算法应用</strong>：使用先进的优化技术进一步提高定位精度。</li></ol><h2 id="创新点-14" tabindex="-1"><a class="header-anchor" href="#创新点-14"><span>创新点</span></a></h2><p>本研究的主要创新在于：</p><ul><li>提出了一个适用于混合LOS/NLOS环境的概率模型；</li><li>有效结合了TOA和RSS两种不同的测距方法，利用它们各自的优点来克服单一方法的局限性；</li><li>针对复杂环境下的源定位问题，提供了一种新的解决方案。</li></ul><h2 id="结论-14" tabindex="-1"><a class="header-anchor" href="#结论-14"><span>结论</span></a></h2><p>通过实验验证，基于概率模型的TOA/RSS混合LOS/NLOS环境中源定位方法能够显著提高目标位置估计的准确性。该研究为在复杂的无线通信和传感器网络环境下实现精确的源定位提供了有力的技术支持。</p><h2 id="原文链接-14" tabindex="-1"><a class="header-anchor" href="#原文链接-14"><span>原文链接</span></a></h2><p>https://ieeexplore.ieee.org/abstract/document/10750331/</p><h1 id="精确定位在自动驾驶赛车中的挑战" tabindex="-1"><a class="header-anchor" href="#精确定位在自动驾驶赛车中的挑战"><span>精确定位在自动驾驶赛车中的挑战</span></a></h1><h2 id="关键词-14" tabindex="-1"><a class="header-anchor" href="#关键词-14"><span>关键词</span></a></h2><p>自主车辆; 高精度导航; GPS/IMU组合; 惯性测量单元; 卫星信号干扰; 赛车运动控制</p><h2 id="研究问题-15" tabindex="-1"><a class="header-anchor" href="#研究问题-15"><span>研究问题</span></a></h2><p>精确的地理位置追踪对于开发安全和有效的自动驾驶系统至关重要。然而，技术限制（如卫星信号弱）以及极端环境下（例如赛车比赛中的高速和高加速度环境）对位置估计准确性提出了挑战。</p><p>本研究旨在探讨不同的定位方法及其在模拟赛车运动场景中的适用性，并分析这些方法各自的优势与劣势。具体包括：</p><ol><li>对GPS/IMU组合系统进行性能评估，以解决信号弱或丢失的问题。</li><li>分析基于视觉的方法（如激光雷达和相机）的有效性和局限性。</li><li>探讨多传感器融合技术的应用潜力及其对定位精度的提升作用。</li></ol><h2 id="方法-15" tabindex="-1"><a class="header-anchor" href="#方法-15"><span>方法</span></a></h2><p>本研究采用以下步骤来实现上述目标：</p><ol><li>模拟赛车运动场景，以测试不同的定位方法在高速行驶条件下的表现。</li><li>使用GPS/IMU组合系统作为基准，评估不同环境条件下（包括高动态和强干扰）的位置估计误差。</li><li>通过仿真和实验验证基于视觉的定位技术，并与惯性传感器的结果进行比较。</li><li>探索多传感器融合策略，以提高整体系统的鲁棒性和精度。</li></ol><h2 id="创新点-15" tabindex="-1"><a class="header-anchor" href="#创新点-15"><span>创新点</span></a></h2><p>本研究的主要贡献在于：</p><ol><li>提供了一套全面的方法来评估不同环境条件下自动驾驶车辆的位置估计性能。</li><li>揭示了在极端赛车运动环境中GPS/IMU组合系统的优势与局限性，并提出相应的改进措施。</li><li>探讨多传感器融合技术的应用前景，为未来的高精度导航系统开发提供理论依据。</li></ol><h2 id="结论-15" tabindex="-1"><a class="header-anchor" href="#结论-15"><span>结论</span></a></h2><p>本研究结果表明，为了实现精确的位置跟踪和高效的自主车辆控制，在不同环境条件下应采取不同的定位策略。GPS/IMU组合方法在卫星信号弱或丢失时具有较好的鲁棒性，但存在误差积累的问题；基于视觉的解决方案能够在某些情况下提供更准确的估计，但也面临着实时处理能力的要求。结合多传感器信息可以显著提高系统的精度和可靠性。</p><p>未来的工作应集中在改进现有技术以克服其局限性，并探索新的定位方法来满足日益增长的应用需求。</p><h2 id="原文链接-15" tabindex="-1"><a class="header-anchor" href="#原文链接-15"><span>原文链接</span></a></h2><p>https://www.mdpi.com/2673-4591/79/1/88</p><h1 id="基于回声状态网络的室内定位系统" tabindex="-1"><a class="header-anchor" href="#基于回声状态网络的室内定位系统"><span>基于回声状态网络的室内定位系统</span></a></h1><h2 id="关键词-15" tabindex="-1"><a class="header-anchor" href="#关键词-15"><span>关键词：</span></a></h2><p>回声状态网络（ESN）、卷积神经网络（CNN）、时间卷积网络（TCN）、容性传感技术、室内定位</p><h2 id="研究问题-16" tabindex="-1"><a class="header-anchor" href="#研究问题-16"><span>研究问题：</span></a></h2><p>如何利用先进的机器学习算法，特别是回声状态网络和卷积神经网络，提高基于容性传感器的室内定位系统的精度？</p><h2 id="方法-16" tabindex="-1"><a class="header-anchor" href="#方法-16"><span>方法：</span></a></h2><p>本研究采用两种主要方法：回声状态网络（ESN）模型和时间卷积网络（TCN）模型。首先通过4个输入、2个输出构建一个基本的ESN模型，并在此基础上进行优化改进；同时设计了一个基于容性传感数据的时间卷积网络模型，旨在提高序列预测能力。此外，还特别考虑了不同输入配置对系统性能的影响，探讨如何更好地利用传感器采集的数据。</p><h2 id="创新点-16" tabindex="-1"><a class="header-anchor" href="#创新点-16"><span>创新点：</span></a></h2><ol><li><strong>引入先进算法</strong>：首次尝试在室内定位领域应用回声状态网络（ESN）和时间卷积神经网络(TCN)，以期获得比传统方法更准确的室内位置估计。</li><li><strong>优化模型设计</strong>：通过对回声状态网络输入输出配置的调整，以及探索新的参数设定来提高系统的鲁棒性和准确性。</li><li><strong>多传感器数据融合</strong>：提出了一种新颖的数据融合策略，有效结合不同来源的容性传感信息，以提升整体定位精度。</li></ol><h2 id="结论-16" tabindex="-1"><a class="header-anchor" href="#结论-16"><span>结论：</span></a></h2><p>实验结果显示，相较于传统的室内定位技术，基于回声状态网络和时间卷积神经网络的方法在提高精度方面表现出显著优势。通过对模型结构及参数进行优化调整，能够进一步增强系统的适应性和可靠性。因此，在未来的开发中，建议继续探索并应用更多机器学习算法来解决室内定位相关问题。</p><p>这种方法具有广阔的前景，并有望在未来智能建筑、智能家居等领域得到广泛应用。通过持续的技术改进和创新，相信可以为用户提供更加精准可靠的室内导航服务。</p><h2 id="原文链接-16" tabindex="-1"><a class="header-anchor" href="#原文链接-16"><span>原文链接</span></a></h2><p>https://webthesis.biblio.polito.it/33071/1/tesi.pdf</p><h1 id="基于单目slam的移动机器人室内定位与导航系统的发展" tabindex="-1"><a class="header-anchor" href="#基于单目slam的移动机器人室内定位与导航系统的发展"><span>基于单目SLAM的移动机器人室内定位与导航系统的发展</span></a></h1><h2 id="关键词-16" tabindex="-1"><a class="header-anchor" href="#关键词-16"><span>关键词</span></a></h2><p>计算机科学 - 机器人技术</p><h2 id="研究问题-17" tabindex="-1"><a class="header-anchor" href="#研究问题-17"><span>研究问题</span></a></h2><p>移动机器人的定位和导航是两个关键的问题。本文提出了一种基于单目同时定位与地图构建（SLAM）的方法，用于差分驱动机器人上的定位和导航系统的开发。</p><h2 id="方法-17" tabindex="-1"><a class="header-anchor" href="#方法-17"><span>方法</span></a></h2><p>本研究的系统在Robot Operating System (ROS)上实现，并使用了一个装备有嵌入式计算平台（Jetson Xavier AGX）、2D相机以及激光雷达传感器的差分驱动机器人来收集外部环境信息。A*算法与动态窗口方法(DWA)用于基于二维栅格地图进行路径规划，而ORB_SLAM3 算法则被用来提取环境特征，为机器人的定位和导航提供姿态数据。</p><h2 id="创新点-17" tabindex="-1"><a class="header-anchor" href="#创新点-17"><span>创新点</span></a></h2><p>本系统在Gazebo仿真环境中进行了测试，并通过Rviz可视化展示其有效性。该研究展示了所开发系统的高效性和在移动机器人室内定位与导航方面的潜力。</p><h2 id="结论-17" tabindex="-1"><a class="header-anchor" href="#结论-17"><span>结论</span></a></h2><p>本文提出了一种基于单目SLAM的差分驱动移动机器人的室内定位和导航解决方案，系统地解决了机器人路径规划、环境建模及实时导航问题，并通过仿真测试验证了其性能。该方法为未来移动机器人的自主操作提供了可行性和新的研究方向。</p><h2 id="原文链接-17" tabindex="-1"><a class="header-anchor" href="#原文链接-17"><span>原文链接</span></a></h2><p>https://ui.adsabs.harvard.edu/abs/2024arXiv241105337N/abstract</p><h1 id="用户中心的室内导航系统-为视障人士设计" tabindex="-1"><a class="header-anchor" href="#用户中心的室内导航系统-为视障人士设计"><span>用户中心的室内导航系统：为视障人士设计</span></a></h1><h2 id="关键词-17" tabindex="-1"><a class="header-anchor" href="#关键词-17"><span>关键词</span></a></h2><p>用户中心导航, 视觉障碍者, 室内导航, 智能手杖, 动态更新路线, 障碍物检测</p><h2 id="研究问题-18" tabindex="-1"><a class="header-anchor" href="#研究问题-18"><span>研究问题</span></a></h2><p>如何通过技术创新，开发出一款适用于视觉障碍者的室内导航系统？这种系统的具体需求和挑战是什么？</p><h2 id="方法-18" tabindex="-1"><a class="header-anchor" href="#方法-18"><span>方法</span></a></h2><p>本研究采用用户中心的设计方法，结合最新的智能设备和技术。主要步骤包括：</p><ol><li><strong>调研与分析</strong>：对现有技术和视障人士的需求进行深入调研。</li><li><strong>设计与原型开发</strong>：根据调研结果设计并构建室内导航系统模型。</li><li><strong>测试与评估</strong>：在实验室及实际环境中，通过用户反馈来不断优化系统的功能和用户体验。</li></ol><h2 id="创新点-18" tabindex="-1"><a class="header-anchor" href="#创新点-18"><span>创新点</span></a></h2><ol><li><strong>动态更新路线算法</strong>：实时获取最新的环境信息，为用户提供最佳的行进路径。</li><li><strong>智能手杖集成技术</strong>：利用先进的传感器技术，可以自动检测并避开障碍物，为视障人士提供更加安全可靠的导航服务。</li><li><strong>用户体验优化</strong>：充分考虑用户的使用习惯和偏好，采用简洁直观的操作界面设计。</li></ol><h2 id="结论-18" tabindex="-1"><a class="header-anchor" href="#结论-18"><span>结论</span></a></h2><p>用户中心的室内导航系统能够有效帮助视觉障碍者实现独立出行的目标。该系统不仅提供了高效、精确的路线引导功能，还具备了先进的障碍物检测技术，并通过不断迭代测试实现了良好的用户体验优化。未来的研究将进一步探索更多元化的应用场景和技术改进方案，以更好地服务于视障群体的需求。</p><h2 id="原文链接-18" tabindex="-1"><a class="header-anchor" href="#原文链接-18"><span>原文链接</span></a></h2><p>https://link.springer.com/chapter/10.1007/978-3-031-70539-7_5</p>',266)]))}const d=e(h,[["render",s],["__file","20241117_室内定位.html.vue"]]),p=JSON.parse('{"path":"/papers/20241117_%E5%AE%A4%E5%86%85%E5%AE%9A%E4%BD%8D.html","title":"20241117_室内定位","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"20241117_室内定位","description":"20241117_室内定位"},"headers":[{"level":2,"title":"关键词","slug":"关键词","link":"#关键词","children":[]},{"level":2,"title":"研究问题","slug":"研究问题","link":"#研究问题","children":[]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[]},{"level":2,"title":"创新点","slug":"创新点","link":"#创新点","children":[]},{"level":2,"title":"结论","slug":"结论","link":"#结论","children":[]},{"level":2,"title":"原文链接","slug":"原文链接","link":"#原文链接","children":[]},{"level":2,"title":"关键词","slug":"关键词-1","link":"#关键词-1","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-1","link":"#研究问题-1","children":[]},{"level":2,"title":"方法","slug":"方法-1","link":"#方法-1","children":[]},{"level":2,"title":"创新点","slug":"创新点-1","link":"#创新点-1","children":[]},{"level":2,"title":"结论","slug":"结论-1","link":"#结论-1","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-1","link":"#原文链接-1","children":[]},{"level":2,"title":"关键词","slug":"关键词-2","link":"#关键词-2","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-2","link":"#研究问题-2","children":[]},{"level":2,"title":"方法","slug":"方法-2","link":"#方法-2","children":[]},{"level":2,"title":"创新点","slug":"创新点-2","link":"#创新点-2","children":[]},{"level":2,"title":"结论","slug":"结论-2","link":"#结论-2","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-2","link":"#原文链接-2","children":[]},{"level":2,"title":"关键词","slug":"关键词-3","link":"#关键词-3","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-3","link":"#研究问题-3","children":[]},{"level":2,"title":"方法","slug":"方法-3","link":"#方法-3","children":[]},{"level":2,"title":"创新点","slug":"创新点-3","link":"#创新点-3","children":[]},{"level":2,"title":"结论","slug":"结论-3","link":"#结论-3","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-3","link":"#原文链接-3","children":[]},{"level":2,"title":"关键词","slug":"关键词-4","link":"#关键词-4","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-4","link":"#研究问题-4","children":[]},{"level":2,"title":"方法","slug":"方法-4","link":"#方法-4","children":[]},{"level":2,"title":"创新点","slug":"创新点-4","link":"#创新点-4","children":[]},{"level":2,"title":"结论","slug":"结论-4","link":"#结论-4","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-4","link":"#原文链接-4","children":[]},{"level":2,"title":"关键词","slug":"关键词-5","link":"#关键词-5","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-5","link":"#研究问题-5","children":[]},{"level":2,"title":"方法","slug":"方法-5","link":"#方法-5","children":[]},{"level":2,"title":"创新点","slug":"创新点-5","link":"#创新点-5","children":[]},{"level":2,"title":"结论","slug":"结论-5","link":"#结论-5","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-5","link":"#原文链接-5","children":[]},{"level":2,"title":"关键词","slug":"关键词-6","link":"#关键词-6","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-6","link":"#研究问题-6","children":[]},{"level":2,"title":"方法","slug":"方法-6","link":"#方法-6","children":[]},{"level":2,"title":"创新点","slug":"创新点-6","link":"#创新点-6","children":[]},{"level":2,"title":"结论","slug":"结论-6","link":"#结论-6","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-6","link":"#原文链接-6","children":[]},{"level":2,"title":"关键词","slug":"关键词-7","link":"#关键词-7","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-7","link":"#研究问题-7","children":[]},{"level":2,"title":"方法","slug":"方法-7","link":"#方法-7","children":[]},{"level":2,"title":"创新点","slug":"创新点-7","link":"#创新点-7","children":[]},{"level":2,"title":"结论","slug":"结论-7","link":"#结论-7","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-7","link":"#原文链接-7","children":[]},{"level":2,"title":"关键词","slug":"关键词-8","link":"#关键词-8","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-8","link":"#研究问题-8","children":[]},{"level":2,"title":"方法","slug":"方法-8","link":"#方法-8","children":[]},{"level":2,"title":"创新点","slug":"创新点-8","link":"#创新点-8","children":[]},{"level":2,"title":"结论","slug":"结论-8","link":"#结论-8","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-8","link":"#原文链接-8","children":[]},{"level":2,"title":"关键词：","slug":"关键词-9","link":"#关键词-9","children":[]},{"level":2,"title":"研究问题：","slug":"研究问题-9","link":"#研究问题-9","children":[]},{"level":2,"title":"方法：","slug":"方法-9","link":"#方法-9","children":[]},{"level":2,"title":"创新点：","slug":"创新点-9","link":"#创新点-9","children":[]},{"level":2,"title":"结论：","slug":"结论-9","link":"#结论-9","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-9","link":"#原文链接-9","children":[]},{"level":2,"title":"关键词","slug":"关键词-10","link":"#关键词-10","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-10","link":"#研究问题-10","children":[]},{"level":2,"title":"方法","slug":"方法-10","link":"#方法-10","children":[]},{"level":2,"title":"创新点","slug":"创新点-10","link":"#创新点-10","children":[]},{"level":2,"title":"结论","slug":"结论-10","link":"#结论-10","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-10","link":"#原文链接-10","children":[]},{"level":2,"title":"关键词","slug":"关键词-11","link":"#关键词-11","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-11","link":"#研究问题-11","children":[]},{"level":2,"title":"方法","slug":"方法-11","link":"#方法-11","children":[]},{"level":2,"title":"创新点","slug":"创新点-11","link":"#创新点-11","children":[]},{"level":2,"title":"结论","slug":"结论-11","link":"#结论-11","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-11","link":"#原文链接-11","children":[]},{"level":2,"title":"关键词","slug":"关键词-12","link":"#关键词-12","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-12","link":"#研究问题-12","children":[]},{"level":2,"title":"方法","slug":"方法-12","link":"#方法-12","children":[]},{"level":2,"title":"创新点","slug":"创新点-12","link":"#创新点-12","children":[]},{"level":2,"title":"结论","slug":"结论-12","link":"#结论-12","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-12","link":"#原文链接-12","children":[]},{"level":2,"title":"关键词：惯性导航系统；姿态角误差；误差模型；李群","slug":"关键词-惯性导航系统-姿态角误差-误差模型-李群","link":"#关键词-惯性导航系统-姿态角误差-误差模型-李群","children":[]},{"level":2,"title":"研究问题：","slug":"研究问题-13","link":"#研究问题-13","children":[]},{"level":2,"title":"方法","slug":"方法-13","link":"#方法-13","children":[]},{"level":2,"title":"创新点","slug":"创新点-13","link":"#创新点-13","children":[]},{"level":2,"title":"结论：","slug":"结论-13","link":"#结论-13","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-13","link":"#原文链接-13","children":[]},{"level":2,"title":"关键词","slug":"关键词-13","link":"#关键词-13","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-14","link":"#研究问题-14","children":[]},{"level":2,"title":"方法","slug":"方法-14","link":"#方法-14","children":[]},{"level":2,"title":"创新点","slug":"创新点-14","link":"#创新点-14","children":[]},{"level":2,"title":"结论","slug":"结论-14","link":"#结论-14","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-14","link":"#原文链接-14","children":[]},{"level":2,"title":"关键词","slug":"关键词-14","link":"#关键词-14","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-15","link":"#研究问题-15","children":[]},{"level":2,"title":"方法","slug":"方法-15","link":"#方法-15","children":[]},{"level":2,"title":"创新点","slug":"创新点-15","link":"#创新点-15","children":[]},{"level":2,"title":"结论","slug":"结论-15","link":"#结论-15","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-15","link":"#原文链接-15","children":[]},{"level":2,"title":"关键词：","slug":"关键词-15","link":"#关键词-15","children":[]},{"level":2,"title":"研究问题：","slug":"研究问题-16","link":"#研究问题-16","children":[]},{"level":2,"title":"方法：","slug":"方法-16","link":"#方法-16","children":[]},{"level":2,"title":"创新点：","slug":"创新点-16","link":"#创新点-16","children":[]},{"level":2,"title":"结论：","slug":"结论-16","link":"#结论-16","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-16","link":"#原文链接-16","children":[]},{"level":2,"title":"关键词","slug":"关键词-16","link":"#关键词-16","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-17","link":"#研究问题-17","children":[]},{"level":2,"title":"方法","slug":"方法-17","link":"#方法-17","children":[]},{"level":2,"title":"创新点","slug":"创新点-17","link":"#创新点-17","children":[]},{"level":2,"title":"结论","slug":"结论-17","link":"#结论-17","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-17","link":"#原文链接-17","children":[]},{"level":2,"title":"关键词","slug":"关键词-17","link":"#关键词-17","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-18","link":"#研究问题-18","children":[]},{"level":2,"title":"方法","slug":"方法-18","link":"#方法-18","children":[]},{"level":2,"title":"创新点","slug":"创新点-18","link":"#创新点-18","children":[]},{"level":2,"title":"结论","slug":"结论-18","link":"#结论-18","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-18","link":"#原文链接-18","children":[]}],"git":{"updatedTime":1731827523000,"contributors":[{"name":"zhanglei","email":"zhangleilikejay@gmail.com","commits":1}]},"filePathRelative":"papers/20241117_室内定位.md"}');export{d as comp,p as data};
